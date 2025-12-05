import React, { useEffect } from 'react';
import { Box, Grid, Container } from '@mui/material';
import NavBar from './NavBar';
import ProjectInfoPanel from './ProjectInfoPanel';
import FacilityCommodityPanel from './FacilityCommodityPanel';
import BenchmarkPanel from './BenchmarkPanel';
import ComparisonPanel from './ComparisonPanel';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/projectsSlice';

export default function MainContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <ProjectInfoPanel />
            <Box mt={2}>
              <FacilityCommodityPanel />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <BenchmarkPanel />
          </Grid>

          <Grid item xs={12} md={4}>
            <ComparisonPanel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
