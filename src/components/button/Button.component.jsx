import {BaseButton, GoogleSignInButton, InvertedButton} from './button.styles';

export const BUTTION_TYPE_CLASS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTION_TYPE_CLASS.base)=>{
   return( 
        {
            [BUTTION_TYPE_CLASS.base]: BaseButton,
            [BUTTION_TYPE_CLASS.google]: GoogleSignInButton,
            [BUTTION_TYPE_CLASS.inverted]: InvertedButton
        }[buttonType]
    )
}

const Button = ({children, buttonType, ...otherProps})=>{
    const CustomButton = getButton(buttonType)


    return (
        <CustomButton {...otherProps} >{children}</CustomButton>
    );
}

export default Button;