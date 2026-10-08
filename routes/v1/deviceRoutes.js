// src/routes/v1/diveceRoutes.js
const express = require('express');
const router = express.Router();

const validateToken = require('../../middleware/validateToken');
const deviceController = require('../../controllers/deviceController');

router.put('/update-fcmtoken', validateToken, deviceController.updateFcmToken);

module.exports = router;