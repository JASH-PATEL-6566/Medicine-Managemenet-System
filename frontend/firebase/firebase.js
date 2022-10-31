import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBjfyGCiZw2t2JoAVtHTqJMeqfYf9PskJs",
    authDomain: "medicine-management-sys.firebaseapp.com",
    projectId: "medicine-management-sys",
    storageBucket: "medicine-management-sys.appspot.com",
    messagingSenderId: "278817666215",
    appId: "1:278817666215:web:48ac7e20098ba25b1b1782"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;