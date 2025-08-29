const express = require('express');
const helmet = require('helmet');

const app = express();
const port = 3001; // We'll use a different port to avoid conflicts

// Use Helmet middleware to secure HTTP headers
app.use(helmet());

// A simple route to demonstrate the security headers
app.get('/', (req, res) => {
  res.send('Hello from the secure server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Secure server listening on http://localhost:${port}`);
  console.log('Now, check your browser\'s developer tools for security headers!');
});
