import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, FormGroup, Button, Box, Stepper, Step, StepLabel, StepButton, Alert, Select, MenuItem } from '@mui/material';
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

  const isQuestionVisible = (question) => {
    if (!question.showIf) {
      return true;
    }

    const parentValue = formData[question.showIf.field];

    if (Array.isArray(parentValue)) {
      if (question.showIf.includes) {
        return parentValue.includes(question.showIf.includes);
      }
      if (Array.isArray(question.showIf.includesAny)) {
        return question.showIf.includesAny.some((value) => parentValue.includes(value));
      }
    }

    if (question.showIf.equals !== undefined) {
      return parentValue === question.showIf.equals;
    }
    if (question.showIf.notEquals !== undefined) {
      return parentValue !== question.showIf.notEquals;
    }

    return true;
  };

  const needsOtherText = (question) => {
    if (!question.otherField) {
      return false;
    }
    const triggerValue = question.otherTrigger || 'Other';
    const answer = formData[question.field];

    if (Array.isArray(answer)) {
      return answer.includes(triggerValue);
    }

    return answer === triggerValue;
  };

  const validateStep = () => {
    const currentSection = sectionData[activeStep];
    const newErrors = {};
    currentSection.questions.forEach((q) => {
      if (!isQuestionVisible(q)) {
        return;
      }

      const value = formData[q.field];
      const isEmptyCheckbox = q.type === 'checkbox' && (!Array.isArray(value) || value.length === 0);
      const isEmptyText = q.type !== 'checkbox' && !value;

      if (q.required !== false && (isEmptyCheckbox || isEmptyText)) {
        newErrors[q.field] = 'This field is required';
      }

      if (needsOtherText(q) && !formData[q.otherField]) {
        newErrors[q.otherField] = 'Please specify';
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
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Alert severity="success">{success}</Alert>
      </Container>
    );
  }

  const currentSection = sectionData[activeStep];

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, md: 4 }, px: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Logo section={logoSection} />
      </Box>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>{title}</Typography>
      <Typography variant="body2" align="center" color="text.secondary" paragraph>
        Online Media Falsehoods and the Influence of On-Air Personalities and Social Media Influencers on National Integration in Nigeria
      </Typography>
      <Stepper
        activeStep={activeStep}
        nonLinear
        sx={{
          mb: 4,
          flexWrap: 'wrap',
          '& .MuiStepConnector-line': { borderStyle: 'solid', borderColor: 'divider' }
        }}
      >
        {sectionData.map((s, i) => (
          <Step key={i}>
            <StepButton
              onClick={() => { if (i <= activeStep) setActiveStep(i); }}
              disabled={i > activeStep}
              sx={{ cursor: i > activeStep ? 'default' : 'pointer' }}
            >
              {s.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Paper sx={{ p: { xs: 2, md: 4 } }}>
        {error && <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>{error}</Alert>}
        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{currentSection.title}</Typography>
        {currentSection.questions.filter((q) => isQuestionVisible(q)).map((q, i) => {
          const showOtherText = needsOtherText(q);

          return (
            <FormControl fullWidth key={i} sx={{ mb: 3 }} error={!!errors[q.field] || !!errors[q.otherField]}>
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
                      handleChange(q.field, e.target.checked ? [...current, opt] : current.filter((v) => v !== opt));
                    }} />} label={opt} />
                  ))}
                </FormGroup>
              )}
              {q.type === 'select' && (
                <Select
                  fullWidth
                  value={formData[q.field] || ''}
                  onChange={(e) => handleChange(q.field, e.target.value)}
                  error={!!errors[q.field]}
                >
                  <MenuItem value=""><em>Select...</em></MenuItem>
                  {q.options.map((opt) => (
                    <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                  ))}
                </Select>
              )}
              {q.type === 'text' && (
                <TextField
                  fullWidth
                  value={formData[q.field] || ''}
                  onChange={(e) => handleChange(q.field, e.target.value)}
                  multiline={q.multiline}
                  rows={q.multiline ? 3 : 1}
                  error={!!errors[q.field]}
                  helperText={errors[q.field]}
                />
              )}
              {showOtherText && (
                <TextField
                  sx={{ mt: 1 }}
                  label={q.otherLabel || 'Please specify'}
                  value={formData[q.otherField] || ''}
                  onChange={(e) => handleChange(q.otherField, e.target.value)}
                  error={!!errors[q.otherField]}
                  helperText={errors[q.otherField]}
                />
              )}
              {errors[q.field] && q.type !== 'text' && (
                <Typography variant="caption" color="error">{errors[q.field]}</Typography>
              )}
            </FormControl>
          );
        })}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          <Button disabled={activeStep === 0 || loading} onClick={handleBack} sx={{ width: { xs: '100%', sm: 'auto' } }}>Back</Button>
          {activeStep === sectionData.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit} disabled={loading} sx={{ width: { xs: '100%', sm: 'auto' } }}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext} disabled={loading} sx={{ width: { xs: '100%', sm: 'auto' } }}>Next</Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
