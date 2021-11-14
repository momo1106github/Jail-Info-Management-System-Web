const Button = ({buttonlabel, onClick, id = ''}) => {
    return (
        <div className= 'Button'>
            <button className = 'btn' onClick = {()=> onClick()} id = {id}>
                {buttonlabel}
            </button>

        </div>
    )
}
export default Button;