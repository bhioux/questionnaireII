const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const JWT_SECRET = 'your-secret-key-change-in-production';

mongoose.connect('mongodb://mongodb:27017/questionnaireDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

app.use(cors());
app.use(bodyParser.json());

const AdminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'admin' },
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
});

const ResponseSchema = new mongoose.Schema({
  section: String,
  data: Object,
  submittedAt: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', AdminSchema);
const Response = mongoose.model('Response', ResponseSchema);

// Create super admin
Admin.findOne({ username: 'superadmin' }).then(admin => {
  if (!admin) {
    bcrypt.hash('SuperAdmin@2026', 10).then(hash => {
      new Admin({ username: 'superadmin', password: hash, role: 'superadmin' }).save();
      console.log('Super admin created: superadmin/SuperAdmin@2026');
    });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin || !await bcrypt.compare(password, admin.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: admin._id, role: admin.role }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, role: admin.role, username: admin.username });
  } catch (err) {
    res.status(500).json({ error: 'Login failed: ' + err.message });
  }
});

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const superAdminAuth = (req, res, next) => {
  if (req.user.role !== 'superadmin') {
    return res.status(403).json({ error: 'Super admin access required' });
  }
  next();
};

app.post('/api/submit', async (req, res) => {
  try {
    await new Response(req.body).save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/responses', auth, async (req, res) => {
  const responses = await Response.find().sort({ submittedAt: -1 });
  res.json(responses);
});

app.get('/api/responses/:section', auth, async (req, res) => {
  try {
    const responses = await Response.find({ section: req.params.section }).sort({ submittedAt: -1 });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/create', auth, superAdminAuth, async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }
    const exists = await Admin.findOne({ username });
    if (exists) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    await new Admin({ username, password: hash, role: role || 'admin', createdBy: req.user.id }).save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/list', auth, superAdminAuth, async (req, res) => {
  try {
    const admins = await Admin.find({}, '-password').sort({ createdAt: -1 });
    res.json(admins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/admin/:id', auth, superAdminAuth, async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
