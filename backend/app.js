const express = require('express');
const cors = require('cors');
const app = express();
const projectsRouter = require('./routes/projects');

const config = require('./config/config');

app.use(cors());
app.use(cors(config.corsOptions));
app.use(express.json());



// Create data directory if not exists
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

app.use('/api/projects', projectsRouter);

app.listen(config.port, () => 
    console.log(`Server running in ${config.nodeEnv} mode on port ${config.port}`)
);