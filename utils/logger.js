// utils/logger.js
const isDev = process.env.NODE_ENV !== 'production';

const logDev = (...args) => {
  if (isDev) {
    console.log('[DEV/QA]:', ...args);
  }
};

const logError = (message, error) => {
  // Imprime el mensaje y la traza completa del error si existe
  if (error && error.stack) {
    console.error(`[ERROR]: ${message}\n`, error.stack);
  } else if (error) {
    console.error(`[ERROR]: ${message}`, error);
  } else {
    console.error(`[ERROR]: ${message}`);
  }
};

module.exports = { logDev, logError };