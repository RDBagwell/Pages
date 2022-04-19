import SignupForm from '../../components/sign-up-form/Sign-Up-Form.component';
import SigninForm from '../../components/sign-in-form/Sign-In-Form.component';
import './authentication.scss';

const Auth = ()=>{
      return (
        <>
        <h1>Sign In</h1>
        <div className='auth-contaner'>
          <SigninForm />
          <SignupForm />
        </div>
        </>

      );
}



export default Auth