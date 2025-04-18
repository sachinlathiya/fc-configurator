const express = require('express');
const cors = require('cors');
const app = express();
const projectsRouter = require('./routes/projects');

app.use(cors());
app.use(express.json());

// Create data directory if not exists
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

app.use('/api/projects', projectsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));