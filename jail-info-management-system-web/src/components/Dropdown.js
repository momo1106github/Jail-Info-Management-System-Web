//title is optional title to be displayed before the dropdown
//setvalue is a function that takes an input, used to set the value of the selected element
//items is a list with attribute value that is mapped to each option of the dropdown
const Dropdown = ({title='',setvalue, items}) => {

    const handleSelect = (e) =>{
        setvalue(e.target.value);
    }
    return (
        <div className= 'Dropdown'>
           <label>{title}</label>
           <select onChange = {handleSelect}>
           {items.map((item) => (
            <option key = {item.value} value={item.value}>{item.value}</option>
          ))}
            
           </select>
        
        </div>
    )
}
export default Dropdown