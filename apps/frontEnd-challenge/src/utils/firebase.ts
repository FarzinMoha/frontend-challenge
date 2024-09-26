import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAnRQWS_mk8271qZBmHoavMzcwb9s-tm3A",
    authDomain: "frontend-challenge-2d5be.firebaseapp.com",
    projectId: "frontend-challenge-2d5be",
    storageBucket: "frontend-challenge-2d5be.appspot.com",
    messagingSenderId: "208083963317",
    appId: "1:208083963317:web:4de02f02d92a3bbaaf9dfc",
    measurementId: "G-3SCQVWDWF5"
  };

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account',});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( 
    userAuth:any,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
  
    return userDocRef;
};
  
export const signUpFirebase = async (email:string,pass:string,displayName:string) => {
    const response = await createUserWithEmailAndPassword(auth,email,pass);
    await createUserDocumentFromAuth(response.user, { displayName });
    return response
}

export const signInUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};
