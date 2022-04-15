import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebasr.utils';
import SignupForm from '../../components/sign-up-form/Sign-Up-Form.component';

const SignIn = ()=>{
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };
    
      return (
        <div>
          <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>Sign in with Google Popup</button>
          <button onClick={logGoogleUser}>Sign in with Google Popup</button>
          <SignupForm />
        </div>
      );
}



export default SignIn