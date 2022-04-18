import { useState } from 'react'; 
import { createAuthUsingEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebasr.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/Button.component';
import './sign-up-form.styles.scss';

const defaultState = {
    displatName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignupForm = ()=>{
    const [formFields, setFormFields] = useState(defaultState);
    const {displatName, email, password, confirmPassword} = formFields;

    const resetFormFields = ()=>{
        setFormFields(defaultState)
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUsingEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displatName });
            resetFormFields();
            console.log(user)
        } catch (error) {
            if(error.code ===  "auth/email-already-in-use"){
                alert("Email Already In Use.")
            }
            console.log({error})
        }
    }

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput 
                    label={"Display Name"}
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displatName" 
                    value={displatName} 
                />
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
                <FormInput 
                    label={"Confirm Password"}
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                />
                <Button  type='submit'  children="Sign UP" />
            </form>
        </div>
    )
}

export default SignupForm