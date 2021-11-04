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