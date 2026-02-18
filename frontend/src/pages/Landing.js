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
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Logo section="Main" />
      </Box>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}>
        Online Media Falsehoods and the Influence of On-Air Personalities and Social Media Influencers on National Integration in Nigeria
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
        Federal University Oye-Ekiti & National Research Fund
      </Typography>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {sections.map((section) => (
          <Grid item xs={12} sm={6} md={6} key={section.path}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{section.title}</Typography>
                <Typography variant="body2" color="text.secondary">{section.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="large" onClick={() => navigate(section.path)} fullWidth>Start</Button>
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
