const { COST_RATES } = require('../config/constants');
const { createProject, getAllProjects } = require('../models/projectModel');

exports.createProject = (req, res) => {
  try {
    const { projectName, location, area, tier } = req.body;
    const existingProjects = getAllProjects();
    const nameExists = existingProjects.some(
      (project) => project.projectName === projectName
    );

    if (nameExists) {
      return res.status(409).json({ message: 'Project already exists with the same name.' });
    }

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

  } catch (error) {
    res.status(500).json({ message: 'Failed to create project.', error: error.message });
  }
};

exports.getAllProjects = (req, res) => {
  const projects = getAllProjects();
  res.json(projects);
};