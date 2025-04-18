const express = require('express');
const { createProject, getAllProjects } = require('../controllers/projects');

const router = express.Router();

router.post('/', createProject);
router.get('/', getAllProjects);

module.exports = router;