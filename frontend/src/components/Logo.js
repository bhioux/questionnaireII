import React from 'react';
import { Box } from '@mui/material';

export default function Logo({ section }) {
  return (
    <Box sx={{ width: 120, height: 120, bgcolor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
      <span style={{ fontSize: 12, color: '#666' }}>{section} Logo</span>
    </Box>
  );
}
