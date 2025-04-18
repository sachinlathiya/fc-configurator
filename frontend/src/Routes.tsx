import { Routes as RouterRoutes, Route } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';
import ProjectSummary from './components/ProjectSummary';
import ProjectList from './components/ProjectList';

export default function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<ProjectList />} />
      <Route path="/summary/:projectName" element={<ProjectSummary />} />
      <Route path="/add-project" element={<ProjectForm />} />
    </RouterRoutes>
  );
}