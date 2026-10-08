const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const versionGating = require('./middleware/versionGating');
const { logError } = require('./utils/logger');

admin.initializeApp();

const app = express();
const routes = require('./routes');

// 1. Configuraciones de la aplicación Express
app.set('trust proxy', true);

// 2. Middlewares base de parseo y CORS
app.use(express.json());
app.use(cors());

// 3. Middleware de diagnóstico global
app.use((req, res, next) => {
  const clientIp = req.ip;
  const userAgent = req.headers['user-agent'] || 'Desconocido';
  console.log(`[HTTP] ${req.method} ${req.originalUrl} | IP: ${clientIp} | UA: ${userAgent}`);
  next();
});

// 3.5 Aduana Global de Metadatos y Versión (Gating 426)
app.use(versionGating);

// 4. Global
app.use('/api', routes);

// 5. Manejador global de errores no capturados
app.use((err, req, res, next) => {
  logError("🔥 Error global no controlado: ", err.stack || err);
  return sendError(res, "INTERNAL_SERVER_ERROR", err.message);
});

module.exports = app;