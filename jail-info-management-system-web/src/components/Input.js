const Input = ({inputlabel, onChange}) => {
    return (
        <div className= 'Input-box'>
            <label>{inputlabel}</label>
            <input type = 'text' placeholder= 'Type Here' onChange= {(e)=>onChange(e.target.value)} />

        </div>
    )
}
export default Input;