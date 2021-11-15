const Input = ({inputlabel, onChange, inputtype = 'text', id = ''}) => {
    return (
        <div className= 'Input-box'>
            <label>{inputlabel}</label>
            <input type = {inputtype} placeholder= 'Type Here' onChange= {(e)=>onChange(e.target.value)}  id = {id}/>

        </div>
    )
}
export default Input;