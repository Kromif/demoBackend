// src/controllers/deviceController.js
const deviceService = require('../services/deviceService');
const { logDev, logError } = require('../utils/logger');

async function updateFcmToken(req, res) {
  const uid = req.user.uid;
  const data = req.body;
  
  try {
    logDev(`updateFcmToken [IN]: ${JSON.stringify(data)}`);
    if (!data.fcmToken) {
      return res.status(400).json({ ok: false, message: 'fcmToken es requerido' });
    }

    const result = await deviceService.updateFcmTokenService(data.fcmToken, uid);

    return res.status(204).json(result);
  
  } catch (error) {
    logError(`deviceController.updateFcmToken [ERROR]: ${JSON.stringify(req.body, null, 2)}: `, error);
    return sendError(res, "INTERNAL_SERVER_ERROR", error.message);
  }

  // ... otros métodos del controller
}

module.exports = { updateFcmToken };