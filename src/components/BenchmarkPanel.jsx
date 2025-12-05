import React from 'react';
import { Paper, Typography, FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material';
import ProjectList from './ProjectList';

export default function BenchmarkPanel() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Benchmarking Project</Typography>
      <Divider sx={{ my: 1 }} />
      <ProjectList />
    </Paper>
  );
}
