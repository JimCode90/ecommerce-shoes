import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCv_BLDg0sqhzyzR2JqP94UnPeGKt6ey1k",
    authDomain: "proyectoreactcoderhouse.firebaseapp.com",
    projectId: "proyectoreactcoderhouse",
    storageBucket: "proyectoreactcoderhouse.appspot.com",
    messagingSenderId: "783398535569",
    appId: "1:783398535569:web:6a09470dd0ed8fb1f01a30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

