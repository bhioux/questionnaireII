import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Tabs, Tab, Table, TableBody, TableCell, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, Alert, Snackbar, CircularProgress } from '@mui/material';
import { Download, Logout, Add, Delete, Home, Edit } from '@mui/icons-material';
import axios from 'axios';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Logo from '../components/Logo';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default function Dashboard({ token, role, setToken, setRole }) {
  const [tab, setTab] = useState(0);
  const [responses, setResponses] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingResponse, setEditingResponse] = useState(null);
  const [newAdmin, setNewAdmin] = useState({ username: '', password: '', role: 'admin' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const navigate = useNavigate();

  const sections = ['public', 'oap', 'influencer', 'media-professional'];
  const isSuperAdmin = role === 'superadmin';

  useEffect(() => {
    if (tab < 4) {
      fetchResponses(sections[tab]);
    } else if (isSuperAdmin) {
      fetchAdmins();
    }
  }, [tab]);

  const fetchResponses = async (section) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/api/responses/${section}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResponses(data || []);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch responses');
      setResponses([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchAdmins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/api/admin/list`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdmins(data || []);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch admins');
      setAdmins([]);
    } finally {
      setLoading(false);
    }
  };

  const createAdmin = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/admin/create`, newAdmin, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Admin created successfully');
      setOpenDialog(false);
      setNewAdmin({ username: '', password: '', role: 'admin' });
      fetchAdmins();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create admin');
    } finally {
      setLoading(false);
    }
  };

  const deleteAdmin = async (id) => {
    if (!window.confirm('Delete this admin?')) return;
    try {
      await axios.delete(`${API_URL}/api/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Admin deleted');
      fetchAdmins();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete admin');
    }
  };

  const deleteResponse = async (id) => {
    if (!window.confirm('Delete this response?')) return;
    try {
      await axios.delete(`${API_URL}/api/responses/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess('Response deleted');
      fetchResponses(sections[tab]);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete response');
    }
  };

  const updateResponse = async () => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/api/responses/${editingResponse._id}`, 
        { data: editingResponse.data },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Response updated');
      setOpenEditDialog(false);
      setEditingResponse(null);
      fetchResponses(sections[tab]);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update response');
    } finally {
      setLoading(false);
    }
  };

  const exportExcel = () => {
    setExporting(true);
    try {
      const validResponses = responses.filter(r => r && r.data);
      const ws = XLSX.utils.json_to_sheet(validResponses.map(r => ({ ...r.data, submittedAt: r.submittedAt })));
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sections[tab]);
      XLSX.writeFile(wb, `${sections[tab]}-responses.xlsx`);
      setSuccess('Excel file downloaded');
    } catch (err) {
      setError('Export failed');
    } finally {
      setExporting(false);
    }
  };

  const exportCSV = () => {
    setExporting(true);
    try {
      const validResponses = responses.filter(r => r && r.data);
      const ws = XLSX.utils.json_to_sheet(validResponses.map(r => ({ ...r.data, submittedAt: r.submittedAt })));
      const csv = XLSX.utils.sheet_to_csv(ws);
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${sections[tab]}-responses.csv`;
      a.click();
      setSuccess('CSV file downloaded');
    } catch (err) {
      setError('Export failed');
    } finally {
      setExporting(false);
    }
  };

  const exportPDF = () => {
    setExporting(true);
    try {
      const validResponses = responses.filter(r => r && r.data);
      const doc = new jsPDF();
      doc.text(`${sections[tab]} Responses`, 14, 15);
      doc.autoTable({
        startY: 25,
        head: [['Submitted At', 'Data']],
        body: validResponses.map(r => [new Date(r.submittedAt).toLocaleString(), JSON.stringify(r.data).substring(0, 50) + '...'])
      });
      doc.save(`${sections[tab]}-responses.pdf`);
      setSuccess('PDF file downloaded');
    } catch (err) {
      setError('Export failed');
    } finally {
      setExporting(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    setToken(null);
    setRole(null);
    navigate('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 }, px: { xs: 1, md: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Logo section="Admin" />
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>Admin Dashboard</Typography>
            <Typography variant="caption" color="text.secondary">
              {localStorage.getItem('username')} ({role})
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' }, width: { xs: '100%', sm: 'auto' } }}>
          <Button startIcon={<Home />} onClick={() => navigate('/')} sx={{ width: { xs: '100%', sm: 'auto' } }}>Main Menu</Button>
          <Button startIcon={<Logout />} onClick={handleLogout} sx={{ width: { xs: '100%', sm: 'auto' } }}>Logout</Button>
        </Box>
      </Box>

      <Tabs value={tab} onChange={(e, v) => setTab(v)} sx={{ mb: 3 }} variant="scrollable" scrollButtons="auto">
        <Tab label="Public" />
        <Tab label="OAPs" />
        <Tab label="Influencers" />
        <Tab label="Media Professionals" />
        {isSuperAdmin && <Tab label="Manage Admins" />}
      </Tabs>

      {tab < 4 ? (
        <>
          <Box sx={{ mb: 2, display: 'flex', gap: 2 }}>
            <Button startIcon={<Download />} onClick={exportExcel} disabled={exporting || responses.length === 0}>
              {exporting ? 'Exporting...' : 'Excel'}
            </Button>
            <Button startIcon={<Download />} onClick={exportCSV} disabled={exporting || responses.length === 0}>
              {exporting ? 'Exporting...' : 'CSV'}
            </Button>
            <Button startIcon={<Download />} onClick={exportPDF} disabled={exporting || responses.length === 0}>
              {exporting ? 'Exporting...' : 'PDF'}
            </Button>
          </Box>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Submitted At</TableCell>
                    <TableCell>Responses</TableCell>
                    {isSuperAdmin && <TableCell>Actions</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responses.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={isSuperAdmin ? 3 : 2} align="center">No responses yet</TableCell>
                    </TableRow>
                  ) : (
                    responses.filter(r => r && r._id).map((r) => (
                      <TableRow key={r._id}>
                        <TableCell>{new Date(r.submittedAt).toLocaleString()}</TableCell>
                        <TableCell>{Object.keys(r.data || {}).length} fields</TableCell>
                        {isSuperAdmin && (
                          <TableCell>
                            <IconButton onClick={() => { setEditingResponse(r); setOpenEditDialog(true); }} color="primary">
                              <Edit />
                            </IconButton>
                            <IconButton onClick={() => deleteResponse(r._id)} color="error">
                              <Delete />
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
          )}
        </>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Button startIcon={<Add />} onClick={() => setOpenDialog(true)}>Create Admin</Button>
          </Box>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Paper sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {admins.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} align="center">No admins found</TableCell>
                    </TableRow>
                  ) : (
                    admins.filter(admin => admin && admin._id).map((admin) => (
                      <TableRow key={admin._id}>
                        <TableCell>{admin.username}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                        <TableCell>{new Date(admin.createdAt).toLocaleString()}</TableCell>
                        <TableCell>
                          {admin.role !== 'superadmin' && (
                            <IconButton onClick={() => deleteAdmin(admin._id)} color="error">
                              <Delete />
                            </IconButton>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
          )}
        </>
      )}

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Edit Response</DialogTitle>
        <DialogContent>
          {editingResponse && Object.entries(editingResponse.data || {}).map(([key, value]) => (
            <TextField
              key={key}
              fullWidth
              label={key}
              value={Array.isArray(value) ? value.join(', ') : value}
              onChange={(e) => {
                const newValue = Array.isArray(value) ? e.target.value.split(', ') : e.target.value;
                setEditingResponse({ 
                  ...editingResponse, 
                  data: { ...editingResponse.data, [key]: newValue } 
                });
              }}
              margin="normal"
              multiline={typeof value === 'string' && value.length > 50}
              rows={typeof value === 'string' && value.length > 50 ? 3 : 1}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Cancel</Button>
          <Button onClick={updateResponse} variant="contained" disabled={loading}>
            {loading ? 'Updating...' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Create New Admin</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Username"
            value={newAdmin.username}
            onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={newAdmin.password}
            onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={newAdmin.role}
              onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="viewer">Viewer</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={createAdmin} variant="contained" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert severity="error" onClose={() => setError('')}>{error}</Alert>
      </Snackbar>
      <Snackbar open={!!success} autoHideDuration={6000} onClose={() => setSuccess('')}>
        <Alert severity="success" onClose={() => setSuccess('')}>{success}</Alert>
      </Snackbar>
    </Container>
  );
}
