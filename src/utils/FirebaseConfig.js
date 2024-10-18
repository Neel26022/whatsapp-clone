import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD-Uh6MjUPCBdc00DxTvUA0x4gPYe320po",
    authDomain: "whatsapp-3768c.firebaseapp.com",
    projectId: "whatsapp-3768c",
    storageBucket: "whatsapp-3768c.appspot.com",
    messagingSenderId: "1075408594604",
    appId: "1:1075408594604:web:6bf08d870c1601434de109",
    measurementId: "G-KFE33EG0X9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);