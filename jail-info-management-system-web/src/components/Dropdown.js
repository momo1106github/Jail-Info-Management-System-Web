


const Dropdown = ({title='',setvalue, items}) => {

    const handleSelect = (e) =>{
        setvalue(e.target.value);
    }
    return (
        <div className= 'Dropdown'>
            {title}
           <select onChange = {handleSelect}>
           {items.map((item) => (
            <option key = {item.value} value={item.value}>{item.value}</option>
          ))}
            
           </select>
        
        </div>
    )
}
export default Dropdown