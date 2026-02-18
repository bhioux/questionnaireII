import React from 'react';
import { Box } from '@mui/material';

export default function Logo({ section }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', mb: 2, flexWrap: 'wrap' }}>
      <img src="/assets/img/fuoye.jpeg" alt="FUOYE Logo" style={{ height: 80, width: 'auto', objectFit: 'contain' }} />
      <img src="/assets/img/futa.jpeg" alt="FUTA Logo" style={{ height: 80, width: 'auto', objectFit: 'contain' }} />
      <img src="/assets/img/unijos.jpeg" alt="UNIJOS Logo" style={{ height: 80, width: 'auto', objectFit: 'contain' }} />
      <img src="/assets/img/unizik.png" alt="UNIZIK Logo" style={{ height: 80, width: 'auto', objectFit: 'contain' }} />
    </Box>
  );
}
