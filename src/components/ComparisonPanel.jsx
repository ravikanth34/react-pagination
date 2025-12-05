import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import ProjectList from './ProjectList';

export default function ComparisonPanel() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Comparison Project</Typography>
      <Divider sx={{ my: 1 }} />
      <ProjectList />
    </Paper>
  );
}
