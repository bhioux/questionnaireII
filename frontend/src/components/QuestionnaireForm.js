import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, FormGroup, Button, Box, Stepper, Step, StepLabel, Alert } from '@mui/material';
import axios from 'axios';
import Logo from './Logo';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default function QuestionnaireForm({ title, section, sectionData, logoSection }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validateStep = () => {
    const currentSection = sectionData[activeStep];
    const newErrors = {};
    currentSection.questions.forEach(q => {
      if (q.required !== false && !formData[q.field]) {
        newErrors[q.field] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prev) => prev + 1);
    } else {
      setError('Please fill all required fields');
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async () => {
    if (!validateStep()) {
      setError('Please fill all required fields');
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/submit`, { section, data: formData });
      setSubmitted(true);
      setSuccess('Thank you! Your response has been submitted.');
    } catch (err) {
      setError(err.response?.data?.error || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="success">{success}</Alert>
      </Container>
    );
  }

  const currentSection = sectionData[activeStep];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Logo section={logoSection} />
      </Box>
      <Typography variant="h4" align="center" gutterBottom>{title}</Typography>
      <Typography variant="body2" align="center" color="text.secondary" paragraph>
        Federal University Oye-Ekiti & National Research Fund
      </Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {sectionData.map((s, i) => (
          <Step key={i}><StepLabel>{s.title}</StepLabel></Step>
        ))}
      </Stepper>
      <Paper sx={{ p: 4 }}>
        {error && <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>{error}</Alert>}
        <Typography variant="h5" gutterBottom>{currentSection.title}</Typography>
        {currentSection.questions.map((q, i) => (
          <FormControl fullWidth key={i} sx={{ mb: 3 }} error={!!errors[q.field]}>
            <FormLabel required={q.required !== false}>{q.question}</FormLabel>
            {q.type === 'radio' && (
              <RadioGroup value={formData[q.field] || ''} onChange={(e) => handleChange(q.field, e.target.value)}>
                {q.options.map((opt) => (
                  <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
                ))}
              </RadioGroup>
            )}
            {q.type === 'checkbox' && (
              <FormGroup>
                {q.options.map((opt) => (
                  <FormControlLabel key={opt} control={<Checkbox checked={formData[q.field]?.includes(opt)} onChange={(e) => {
                    const current = formData[q.field] || [];
                    handleChange(q.field, e.target.checked ? [...current, opt] : current.filter(v => v !== opt));
                  }} />} label={opt} />
                ))}
              </FormGroup>
            )}
            {q.type === 'text' && (
              <TextField 
                value={formData[q.field] || ''} 
                onChange={(e) => handleChange(q.field, e.target.value)} 
                multiline={q.multiline} 
                rows={q.multiline ? 3 : 1}
                error={!!errors[q.field]}
                helperText={errors[q.field]}
              />
            )}
            {errors[q.field] && q.type !== 'text' && (
              <Typography variant="caption" color="error">{errors[q.field]}</Typography>
            )}
          </FormControl>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button disabled={activeStep === 0 || loading} onClick={handleBack}>Back</Button>
          {activeStep === sectionData.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext} disabled={loading}>Next</Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
