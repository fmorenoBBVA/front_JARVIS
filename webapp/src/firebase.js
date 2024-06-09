
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZV5fbwF_ejxeOiBzG4a3JF5i4f4gygVw",
  authDomain: "test-management.firebaseapp.com",
  projectId: "test-management",
  storageBucket: "test-management.appspot.com",
  messagingSenderId: "1064708462132",
  appId: "1:1064708462132:web:317c05028bca7828f0dc61",
  measurementId: "G-BLCLP82EMX"
};

const app = initializeApp(firebaseConfig);

const getAuthFirebase = async () => {
  if(
    window.location.hostname.startsWith('localhost') || 
    window.location.hostname.startsWith('5173-cs')
  ) {
    return {emailVerified:true};
  } else {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
    } catch (error) {
      console.log(error);
      return {emailVerified:false};
    }
  }
};

export default getAuthFirebase;
