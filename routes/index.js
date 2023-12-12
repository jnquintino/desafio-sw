const express = require('express');
const router = express.Router();

const charactersRoutes = require('./characters');

router.use('/characters', charactersRoutes);

module.exports = router;

