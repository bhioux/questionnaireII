import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import Logo from '../components/Logo';

export default function Landing() {
  const navigate = useNavigate();

  const sections = [
    { title: 'Public Questionnaire', path: '/public', desc: 'For general public who engage with social media' },
    { title: 'On-Air Personalities', path: '/oap', desc: 'For broadcast and online media presenters' },
    { title: 'Social Media Influencers', path: '/influencer', desc: 'For content creators and influencers' },
    { title: 'Media Professionals', path: '/media-professional', desc: 'For editors and media managers' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Logo section="Main" />
      </Box>
      <Typography variant="h3" align="center" gutterBottom>
        Falsehoods Research Study
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
        Federal University Oye-Ekiti & National Research Fund
      </Typography>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {sections.map((section) => (
          <Grid item xs={12} md={6} key={section.path}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>{section.title}</Typography>
                <Typography variant="body2" color="text.secondary">{section.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={() => navigate(section.path)}>Start</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button variant="outlined" onClick={() => navigate('/login')}>Admin Login</Button>
      </Box>
    </Container>
  );
}
