// src/utils/responseHandler.js
const ERROR_CODES = require('./errorCodes');

const sendError = (res, errorKey, customMessage = null, extra = null) => {
  const isKnownError = Boolean(ERROR_CODES[errorKey]);
  const errorDef = isKnownError ? ERROR_CODES[errorKey] : ERROR_CODES.SERVER_ERROR;

  const payload = {
    ok: false,
    subcode: isKnownError ? errorKey : "SERVER_ERROR",
    message: customMessage || errorDef.message,
    ...(typeof extra === "object" && extra !== null ? extra : {})
  };

  return res.status(errorDef.status).json(payload);
};

// Aquí tambien se puede centralizar la respuesta de éxito si se desea

module.exports = { sendError };