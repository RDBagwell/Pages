import { initializeApp } from 'firebase/app';

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3l4J3xTezRI_KFmvE5wLFCi0ExIsHU9M",
    authDomain: "crown-db-2b7fe.firebaseapp.com",
    databaseURL: "https://crown-db-2b7fe-default-rtdb.firebaseio.com",
    projectId: "crown-db-2b7fe",
    storageBucket: "crown-db-2b7fe.appspot.com",
    messagingSenderId: "1032231707803",
    appId: "1:1032231707803:web:e195dc54c9b8223eaf923e",
    measurementId: "G-HYXSG5XB74"
  };
  
  // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters(
      {
          prompt: "select_account"
      }
  )

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await setDoc(userDocRef, { 
                displayName, 
                email,
                createdAt
            });
            
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
  }

export const createAuthUsingEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUsingEmailAndPassword = async (email, password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}