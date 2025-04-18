import { Routes as RouterRoutes, Route } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';
import ProjectSummary from './components/ProjectSummary';
import ProjectList from './components/ProjectList';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<ProjectForm />} />
      <Route path="/summary/:projectName" element={<ProjectSummary />} />
      <Route path="/all-projects" element={<ProjectList />} />
    </RouterRoutes>
  );
}