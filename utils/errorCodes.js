// utils/errorCodes.js
  // 400 — Errores de parámetros / formato
  // 401 — Credenciales
  // 403 — Reglas de negocio
  // 404 — Recursos no encontrados
  // 426 — Errores por versión
  // 500 — Errores internos
  
module.exports = {
  // Errores Headers y App_Secret
  MISSING_HEADERS:   { status: 400, message: "Solicitud rechazada: Faltan metadatos de la aplicación" },
  CLIENT_REJECTED:   { status: 403, message: "Solicitud rechazada: Cliente no autorizado" },

  // Aduana de versión
  UPDATE_REQUIRED:   { status: 426, message: "Hay una versión más reciente disponible. Actualiza la app para continuar" },

  // Errores de Autenticación / Token
  NO_TOKEN_PROVIDED: { status: 401, message: "Token no proporcionado" },
  INVALID_TOKEN:     { status: 401, message: "El token proporcionado no es válido o es inconsistente" },
  UNAUTHORIZED:      { status: 401, message: "Error al validar la identidad del usuario" },
  
  FIRESTORE_ERROR:   { status: 500, message: "Error en la base de datos" },
  SERVER_ERROR:      { status: 500, message: "Error interno del servidor. Intenta más tarde" }, // Tolerancia a errores de terceros
  INTERNAL_SERVER_ERROR: { status: 500, message: "Error interno del servidor. Intenta más tarde" }
};