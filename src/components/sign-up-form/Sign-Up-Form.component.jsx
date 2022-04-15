import { useState } from 'react'; 
import { createAuthUsingEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebasr.utils';

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
                alert("Firebase: Error (auth/email-already-in-use).")
            }
            console.log({error})
        }
    }

    const handleChange = (event)=>{
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={ handleSubmit }>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displatName" value={displatName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign UP</button>
            </form>
        </div>
    )
}

export default SignupForm