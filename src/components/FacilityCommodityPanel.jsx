import React from 'react';
import { Paper, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function FacilityCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Facility Level 1" />
      <FormControlLabel control={<Checkbox />} label="Facility Level 2" />
      <FormControlLabel control={<Checkbox />} label="Facility Level 3" />
    </FormGroup>
  );
}

function CommodityCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Commodity Level 1" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Commodity Level 2" />
    </FormGroup>
  );
}

export default function FacilityCommodityPanel() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" mb={2}>Facility & Commodity</Typography>

      <Typography variant="subtitle2">Facility</Typography>
      <FacilityCheckboxes />

      <Typography variant="subtitle2" sx={{ mt: 2 }}>Commodity</Typography>
      <CommodityCheckboxes />
    </Paper>
  );
}
