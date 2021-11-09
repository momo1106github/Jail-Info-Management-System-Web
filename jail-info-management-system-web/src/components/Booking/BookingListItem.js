//Used to list out items in booking for lists
//Generates a button by each item that can delete the specified item from the list with onClick

const BookingListItem = ({key, label, onClick}) => {
    return (
        <div className= 'BookingListItem' key = {key}>
            <h4>{label}</h4>
            <button className = 'btn' onClick = {()=> onClick()}>
                Remove
            </button>

        </div>
    )
}
export default BookingListItem;