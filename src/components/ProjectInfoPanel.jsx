import React from 'react';
import { Paper, Typography, TextField, MenuItem, Stack } from '@mui/material';

export default function ProjectInfoPanel() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Project Information</Typography>

      <Stack spacing={2}>
        <TextField label="Estimate Base Date" type="date" fullWidth InputLabelProps={{ shrink: true }} />
        <TextField label="Country Region" select fullWidth>
          <MenuItem value="all">All</MenuItem>
        </TextField>

        <TextField label="Product" select fullWidth>
          <MenuItem value="prod1">Product 1</MenuItem>
        </TextField>

        <TextField label="Project Size" select fullWidth>
          <MenuItem value="small">Small</MenuItem>
        </TextField>
      </Stack>
    </Paper>
  );
}
