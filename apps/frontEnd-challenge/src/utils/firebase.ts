import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId:import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID

  };
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account',});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth:any,additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {displayName,email,createdAt,...additionalInformation,});
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
    return userDocRef;
};
  
export const signUpFirebase = async (email:string,pass:string,displayName:string) => {
    const response = await createUserWithEmailAndPassword(auth,email,pass);
    await updateProfile(response.user,{displayName: displayName});
    await createUserDocumentFromAuth(response.user, { displayName });
    return response
}

export const signInUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

export const getUserData = async (uid:any): Promise<any> => {
  const userDocRef = doc(db, 'users',uid);
  const userSnapshot:any = await getDoc(userDocRef);
  const {displayName} = userSnapshot?._document?.data?.value?.mapValue?.fields
  const data = {displayName:displayName.stringValue}
  return data
};

