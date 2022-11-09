import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import navigate from "./components/navigate";
<<<<<<< HEAD
=======
import loadContent from "./components/content-loader";

loadContent()
>>>>>>> b5cf2d1bd7cac7a95e3c027e63997bdca039093a

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
const storage = getStorage(app);