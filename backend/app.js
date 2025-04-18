const express = require('express');
const cors = require('cors');
const app = express();
const rateLimit = require('express-rate-limit');
const projectsRouter = require('./routes/projects');

const config = require('./config/config');


// Define the rate limit rule
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
  },
});
app.use(limiter);
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