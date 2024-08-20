const express = require('express');
const app = express();

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle all other endpoints with a 404 error
app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.originalUrl + '</pre></body></html>');
});

// Make the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

// Export the app
module.exports = app;
