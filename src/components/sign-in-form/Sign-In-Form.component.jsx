import { useState } from 'react'; 
import { signInWithGooglePopup, signInAuthUsingEmailAndPassword } from '../../utils/firebase/firebasr.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/Button.component';
import './sign-in-form.styles.scss';

const defaultState = {
    email: "",
    password: ""
}

const SigninForm = ()=>{
    const [formFields, setFormFields] = useState(defaultState);
    const {email, password} = formFields;

 
    const resetFormFields = ()=>{
        setFormFields(defaultState)
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
      };
    

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try {
            // const user = await signInAuthUsingEmailAndPassword(email, password);
            await signInAuthUsingEmailAndPassword(email, password);
            resetFormFields()
        } catch (error) {
            if(error.code === "auth/wrong-password" || error.code === "auth/user-not-found"){
                alert("Wrong email or password")
            }
        }
    }

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className='sign-up-container'>
            <h2>Do have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput 
                    label={"Email"}
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />
                <FormInput 
                    label={"Password"}
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className='buttons-container'>
                    <Button  type='submit'  children="Sign In" />
                    <Button type='button' buttonType='google' onClick={logGoogleUser} children="Google Sign in" />
                </div>
            </form>
        </div>
    )
}

export default SigninForm