const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_PATH = path.join(__dirname, '..', 'data', 'projects.json');

const readData = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  } catch (error) {
    return [];
  }
};

const writeData = (data) => {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
};

exports.getAllProjects = () => readData();

exports.createProject = (project) => {
  const projects = readData();
  const newProject = { id: uuidv4(), ...project, createdAt: new Date().toISOString() };
  projects.push(newProject);
  writeData(projects);
  return newProject;
};