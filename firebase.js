// 🔥 NOSSO SITE 3.0 — FIREBASE CORE

const firebaseConfig = {
  apiKey: "AIzaSyClIIJkYOmAvEKPtXvG-SIi9SzxQpaBN9s",
  authDomain: "ankidigital.firebaseapp.com",
  projectId: "ankidigital",
  storageBucket: "ankidigital.firebasestorage.app",
  messagingSenderId: "407660648093",
  appId: "1:407660648093:web:b7bf69730e90a28cb36674"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Serviços
const auth = firebase.auth();
const db = firebase.firestore();

// Disponibiliza globalmente
window.auth = auth;
window.db = db;
