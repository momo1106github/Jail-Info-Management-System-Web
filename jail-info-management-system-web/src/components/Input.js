const Input = ({inputlabel, onChange, inputtype = 'text'}) => {
    return (
        <div className= 'Input-box'>
            <label>{inputlabel}</label>
            <input type = {inputtype} placeholder= 'Type Here' onChange= {(e)=>onChange(e.target.value)} />

        </div>
    )
}
export default Input;