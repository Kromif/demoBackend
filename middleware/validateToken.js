// src/middleware/validateToken.js
const admin = require("firebase-admin");
const { logDev, logError } = require("../utils/logger");

module.exports = async function validateToken(req, res, next) {
  try {
    logDev("validateToken EJECUTADO EN: ", req.method, req.originalUrl);

    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : null;

    if (!token) {
      return sendError(res, "NO_TOKEN_PROVIDED");
    }

    const decodedToken = await admin.auth().verifyIdToken(token);

    // Podemos incluir reglas de negocio aquí como validar rol 

    req.user = { uid: decodedToken.uid, rol: decodedToken.rol }
    next();

  } catch (error) {
    logError("validateToken [ERROR]: ", error);
    return sendError(res, "INVALID_TOKEN");
  }
};