import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography, Paper, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Project } from '../types/project';

const ProjectSummary = () => {
  const { state } = useLocation() as { state: Project };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to Form
        </Button>

        <Typography variant="h4" gutterBottom>
          {state.projectName}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              <strong>Location:</strong> {state.location}
            </Typography>
            <Typography variant="body1">
              <strong>Tier:</strong> {state.tier}
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              <strong>Area:</strong> {state.area.toLocaleString()} sqft
            </Typography>
            <Typography variant="body1">
              <strong>Cost per Sqft:</strong> ${state.costPerSqft}
            </Typography>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ mt: 2 }}>
              Total Cost: ${state.totalCost.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>

        <Button
          component={Link}
          to="/all-projects"
          variant="outlined"
          sx={{ mt: 3 }}
          fullWidth
        >
          View All Projects
        </Button>
      </Paper>
    </Box>
  );
};

export default ProjectSummary;