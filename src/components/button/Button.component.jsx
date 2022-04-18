import './button.styles.scss';

const BUTTION_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps})=>{
    return (
        <button className={`button-container ${BUTTION_TYPE_CLASS[buttonType]}`} {...otherProps} >{children}</button>
    );
}

export default Button;