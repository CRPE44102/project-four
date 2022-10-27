import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOtwFQVsxGsigqon8AxOZnnA0HKpw4fVU",
  authDomain: "now-learning.firebaseapp.com",
  projectId: "now-learning",
  storageBucket: "now-learning.appspot.com",
  messagingSenderId: "949585480248",
  appId: "1:949585480248:web:ca5487211b669df77874cd"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);