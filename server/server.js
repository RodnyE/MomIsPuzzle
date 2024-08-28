
const { PUBLIC_DIR, SERVER_PORT } = require('../config'); 
const express = require('express'); 
const app = express(); 
const fs = require('fs');
const open = require('open');

// Check if PUBLIC_DIR exists
if (!fs.existsSync(PUBLIC_DIR)) {
  throw new Error(`The directory '${PUBLIC_DIR}' does not exist. Please run 'npm run build' to generate the necessary files.`);
}

// serve website routes
app.use(express.static(PUBLIC_DIR));
app.get('*', (req, res) => {
  res.sendFile(PUBLIC_DIR + '/index.html');
});

// start server
app.listen(SERVER_PORT, () => {
  console.log('Running in port ' + SERVER_PORT);
  open(`http://localhost:${SERVER_PORT}`);
});