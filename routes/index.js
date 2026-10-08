// src/routes/index.js
const express = require('express');
const router = express.Router();

const deviceV1Routes = require('./v1/deviceRoutes');

router.use('/v1/device', deviceV1Routes);

module.exports = router;