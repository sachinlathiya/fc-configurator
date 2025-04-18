const { COST_RATES } = require('../config/constants');
const { createProject, getAllProjects } = require('../models/projectModel');

exports.createProject = (req, res) => {
  const { projectName, location, area, tier } = req.body;
  const rate = COST_RATES[location][tier];
  const totalCost = area * rate;
  
  const projectData = {
    projectName,
    location,
    tier,
    area: Number(area),
    totalCost,
    costPerSqft: rate
  };

  const newProject = createProject(projectData);
  res.status(201).json(newProject);
};

exports.getAllProjects = (req, res) => {
  const projects = getAllProjects();
  res.json(projects);
};