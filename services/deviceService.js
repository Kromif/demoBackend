// src/services/deviceService.js
const admin = require('firebase-admin');

const updateFcmTokenService = async (fcmToken, uid) => {

    await admin.firestore().collection("devices").doc(uid).update({
        fcmToken: fcmToken,
        fcmTokenRenovado: new Date().toISOString()
    });

    return { ok: true, message: "FcmToken actualizado" };

    // No es necesario try-catch debido a nuestra arquitectura error bubbling 
    // *Manejar mensajes de error personalizados de firestore se logra con el mismo responseHandler
};

// ... mas servicios relacionados con el dispositivo
// const getDeviceInfoService = async (uid) => {};

module.exports = { updateFcmTokenService };