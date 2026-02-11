import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PublicQuestionnaire from './pages/PublicQuestionnaire';
import OAPQuestionnaire from './pages/OAPQuestionnaire';
import InfluencerQuestionnaire from './pages/InfluencerQuestionnaire';
import MediaProfessionalQuestionnaire from './pages/MediaProfessionalQuestionnaire';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login setToken={setToken} setRole={setRole} />} />
          <Route path="/dashboard" element={token ? <Dashboard token={token} role={role} setToken={setToken} setRole={setRole} /> : <Navigate to="/login" />} />
          <Route path="/public" element={<PublicQuestionnaire />} />
          <Route path="/oap" element={<OAPQuestionnaire />} />
          <Route path="/influencer" element={<InfluencerQuestionnaire />} />
          <Route path="/media-professional" element={<MediaProfessionalQuestionnaire />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
