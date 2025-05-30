const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.status(200).send('Hello from CI/CD Pipeline!');
});

// Only start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app; // Export app for testing
