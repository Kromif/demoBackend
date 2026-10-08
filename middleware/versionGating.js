// src/middleware/versionGating.js
const { logDev, logError } = require("../utils/logger");
const { sendError } = require("../utils/responseHandler");

const APP_SECRET_SERVER = process.env.APP_SECRET || "Default_Secret_QA";
const MIN_BUILD_ALLOWED = parseInt(process.env.MIN_BUILD_NUMBER, 10) || 1;
function compareSecrets(a, b) {
  try {
 /*
  * Compara dos cadenas en tiempo constante (Timing-Safe)
  * Evita ataques de sincronización.
 */
  } catch {
    return false;
  }
}

module.exports = function versionGating(req, res, next) {
  try {
    logDev("versionGating EJECUTADO EN: ", req.method, req.originalUrl);

    const clientSecret = req.headers["x-app-secret"];
    const appBuild = req.headers['x-app-build'];
    const appVersion = req.headers['x-app-version'];
    const appName = req.headers['x-app-name'];

    // 1. Sin metadatos de la app, rechazamos de inmediato (400)
    if (!appBuild || !appVersion || !appName || !clientSecret) {
      return sendError(res, "MISSING_HEADERS");
    }

    // 2. Validación de Secreto con Timing-Safe Equal (403)
    if (!compareSecrets(clientSecret, APP_SECRET_SERVER)) {
      return sendError(res, "CLIENT_REJECTED");
    }

    // 3. Aduana de versión (426 Update Required)
    const numericBuild = parseInt(appBuild, 10);

    if (isNaN(numericBuild) || numericBuild < MIN_BUILD_ALLOWED) {
      return sendError(res, "UPDATE_REQUIRED", null, { MIN_BUILD_ALLOWED });
    }

    next();

  } catch (error) {
    logError("versionGating [ERROR]: ", error);
    return sendError(res, "INTERNAL_SERVER_ERROR");
  }
};