const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello from CI/CD Pipeline!');
});

module.exports = router;
