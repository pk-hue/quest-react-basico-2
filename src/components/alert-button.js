import './alert-button.css'

const showAlert = ()=> {
    alert(`A label desse botão é ${Button.defaultProps.label}`) 
}
const Button = ()=> {
    return(
        <>
        <button className="btn" onClick={showAlert}>Activate alert</button>
        </>
    )
};

Button.defaultProps = {
    label: 'Activate alert',
}

export default Button