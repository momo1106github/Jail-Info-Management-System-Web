//Very Similar to input, but allows for the input to be preset based on default value
//default value should be the usestate value the is being changed with onChange
//otherwise, the value will not update
const PreInput = ({defaultvalue,inputlabel, onChange, inputtype = 'text', id=''}) => {
    return (
        <div className= 'PrefilledInputBox'>
            <label>{inputlabel}</label>
            <input value = {defaultvalue} type = {inputtype} placeholder= 'Type Here' onChange= {(e)=>onChange(e.target.value)} id = {id} />

        </div>
    )
}
export default PreInput;