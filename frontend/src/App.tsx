import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProjectForm from './components/ProjectForm';
import ProjectSummary from './components/ProjectSummary';
import ProjectList from './components/ProjectList';
import { theme } from './theme/theme';
import React from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<ProjectForm />} />
          <Route
            path="/summary/:projectName"
            element={<ProjectSummary />}
          />
          <Route path="/all-projects" element={<ProjectList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;