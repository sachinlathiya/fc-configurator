import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Paper,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';
import { ProjectFormData } from '../types/project';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProjectFormData>({
    projectName: '',
    location: 'New York',
    area: '',
    tier: 'Simple'
  });

  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/projects', {
        ...formData,
        area: Number(formData.area)
      });
      navigate(`/summary/${response.data.projectName}`, { state: response.data });
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('A project with this name already exists.');
      } else {
        setErrorMessage('An error occurred while submitting the project.');
      }
      setErrorOpen(true);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
      >
        Back to Project List
      </Button>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          New Project Configuration
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Name"
                variant="outlined"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select
                  value={formData.location}
                  label="Location"
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                >
                  {['New York', 'Dallas', 'Greeley', 'Herndon'].map((loc) => (
                    <MenuItem key={loc} value={loc}>{loc}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Area (sqft)"
                type="number"
                variant="outlined"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                inputProps={{ min: 1 }}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Tier</FormLabel>
                <RadioGroup
                  row
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                >
                  {['Simple', 'Enhanced', 'Advanced'].map((tier) => (
                    <FormControlLabel
                      key={tier}
                      value={tier}
                      control={<Radio />}
                      label={tier}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Calculate Cost
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar
        open={errorOpen}
        autoHideDuration={4000}
        onClose={() => setErrorOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProjectForm;
