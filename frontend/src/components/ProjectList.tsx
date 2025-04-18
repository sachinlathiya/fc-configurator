import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';
import { Project } from '../types/project';

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let apiUrl = `${process.env.REACT_APP_API_URL}` || `http://localhost:5000/api`;
        const response = await axios.get(`${apiUrl}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        All Projects
      </Typography>
      
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{ mb: 3 }}
      >
        Create New Project
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: 'primary.main' }}>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Project Name</TableCell>
              <TableCell sx={{ color: 'white' }}>Location</TableCell>
              <TableCell sx={{ color: 'white' }}>Tier</TableCell>
              <TableCell sx={{ color: 'white' }}>Area (sqft)</TableCell>
              <TableCell sx={{ color: 'white' }}>Total Cost</TableCell>
              <TableCell sx={{ color: 'white' }}>Created Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.tier}</TableCell>
                <TableCell>{project.area.toLocaleString()}</TableCell>
                <TableCell>${project.totalCost.toLocaleString()}</TableCell>
                <TableCell>
                  {new Date(project.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectList;