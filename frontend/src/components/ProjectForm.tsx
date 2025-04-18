import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    <div>
      <h2>All Projects</h2>
      <Link to="/">Create New Project</Link>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Location</th>
            <th>Tier</th>
            <th>Area</th>
            <th>Total Cost</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.location}</td>
              <td>{project.tier}</td>
              <td>{project.area} sqft</td>
              <td>${project.totalCost.toLocaleString()}</td>
              <td>{new Date(project.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;