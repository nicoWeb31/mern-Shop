import admin from "firebase-admin";
import {fbSericeAccountKey} from "../config/fbServiceAccountKey.js";


admin.initializeApp({
    credential: admin.credential.cert(fbSericeAccountKey),
});

export default admin;
