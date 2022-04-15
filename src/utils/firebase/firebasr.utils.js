import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
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
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters(
      {
          prompt: "select_account"
      }
  )

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

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

