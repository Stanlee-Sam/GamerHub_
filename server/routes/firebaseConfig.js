
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB2Wvo_0F7IgG4NtdK8SnS1NeKpMFvxGPk",
  authDomain: "gamerhub-a7766.firebaseapp.com",
  projectId: "gamerhub-a7766",
  storageBucket: "gamerhub-a7766.appspot.com",
  messagingSenderId: "78321559499",
  appId: "1:78321559499:web:7c033fb4faabf26d6cf84e",
  measurementId: "G-SJNDNWDFDJ"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
