const Button = ({buttonlabel, onClick}) => {
    return (
        <div className= 'Button'>
            <button className = 'btn' onClick = {()=> onClick()}>
                {buttonlabel}
            </button>

        </div>
    )
}
export default Button;