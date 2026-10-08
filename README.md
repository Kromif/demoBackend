# Express Clean Architecture API (Demo Portfolio)

Servicio backend desarrollado en **Node.js + Express**, diseñado bajo los principios de **Arquitectura Limpia** (Clean Architecture) 
e infraestructura *Serverless* en **Google Cloud Platform (Cloud Run)**. 

Este proyecto público demuestra patrones de diseño avanzados para producción, incluyendo control de acceso por versión obligatoria (*Version Gating*), 
autenticación y validación de JWT con Firebase Admin SDK, manejo de errores estandarizado y separación modular de responsabilidades.

Nota: Este código es un fragmento sanitizado de un proyecto propio desplegado en producción utilizando Cloud Run.

---

## 🛠️ Tech Stack & Herramientas

* **Runtime:** Node.js
* **Framework:** Express.js
* **Cloud Infrastructure:** Google Cloud Platform (Cloud Run, Artifact Registry)
* **DevOps / CI-CD:** Docker, `.gcloudignore` / `.gitignore`
* **Logging & Monitoreo:** Cloud Logging, middleware de logs personalizado

---

## 🏗️ Arquitectura del Proyecto

El código está estructurado siguiendo la separación de responsabilidades para garantizar mantenibilidad, testabilidad y escalabilidad:

```text
src/
├── controllers/     # Capa de presentación (Manejo de HTTP req/res)
├── services/        # Capa de lógica de negocio pura
├── routes/          # Definición y versión de endpoints (v1)
├── middleware/      # Interceptores (Version Gating, Auth Tokens)
└── utils/           # Utilidades compartidas (Response Handlers, Logger, Diccionario de Errores)
```
## 🚀 Respuestas de la API

La API estandariza todas sus respuestas de error con el siguiente formato:

```json
{
  "ok": false,
  "subcode": "VERSION_OUTDATED",
  "message": "Es necesario actualizar la aplicación para continuar."
}
```
# Desarrollo local
npm install
npm run dev

# Despliegue a Cloud Run
gcloud run deploy demo-portfolio-api --source .

---

## 👨‍💻 Autor

Desarrollado por **[Ing. JRF]**.

* **GitHub:** https://github.com/Kromif
* **LinkedIn:** https://www.linkedin.com/in/ing-julio-rod-flo
* **Contacto:** alo.756@hotmail.com

---

> *Este proyecto forma parte de mi portafolio profesional de arquitectura backend y desarrollo en la nube.*
