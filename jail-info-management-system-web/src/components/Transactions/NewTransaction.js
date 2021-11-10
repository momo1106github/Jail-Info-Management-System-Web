import { useState } from 'react';
import {useHistory, useParams} from 'react-router'
import Header from '../Header'
import LinkButton from '../LinkButton'
import Input from '../Input'
import PreInput from '../PrefilledInput'
import Header2 from '../Header2'
import Button from '../Button'
import Dropdown from '../Booking/Dropdown';


const NewTransaction = ({bookingclerkid}) => {
    //The pg param is used to track what page the transaction is currently in
    const {pg} = useParams();

    //Buttons are used to proceed forward and backward through the transaction process
    const history = useHistory();

    //Outdated
    const back = () =>{
    history.push('/newtransaction/1')
    }

    //Transaction motive
    const transoptionlist = [
        {value: 'Deposit'},
        {value: 'Withdraw'}
    ]

    //Transaction Type
    const [transtype, setTransType] = useState("");

    //Information
    const [transamount, setTransAmount] = useState();

    //Reason
    const [reason, setReason] = useState("");

    //Automatically Calculate Vars for Log
    const [transactionid, setTransactionId] = useState("")
    const [transactiontime, setTransactionTime] = useState("");





    const confirmInput = () =>{
        if(ValidateInput()){
            setTransactionTime(Date().toLocaleString());
            history.push('/newtransaction/'+ (parseInt(pg)+1));
        }
        else{
            //alert
        }
    }

    //Clear all input fields
    const ClearInput = () => {

    }
    const ValidateInput = () => {
        return true;
    }

    const ConfirmTransaction = () => {
        //send data
    }

    //Used to create a new transaction right after finishing one 
    const NextTransaction = () =>{
        ClearInput();
        back();
    }


    //Page Display
    return (
        <div className = "TransactionPage">
            <Header title='New Transaction'/>
            <LinkButton linklabel = 'Home' link = '/home'/>
        
        {parseInt(pg)===1 &&
            <div className = "newtransactionpage">
            <Button buttonlabel = 'Clear All Input' onClick = {ClearInput}/>
            <Header2 title = 'Inmate Search'/>

            <Dropdown setvalue = {setTransType} items = {transoptionlist} title = 'Transaction Type '/>
            <PreInput defaultvalue = {transamount} inputlabel = 'Amount ' onChange = {setTransAmount}/>

            <Header2 title = 'Reason for Transaction'/>
            <PreInput defaultvalue = {reason} inputlabel = '' onChange = {setReason}/>
            
            <Button buttonlabel = 'Confirm Input' onClick = {confirmInput}/>
            </div>
        }
        
        {parseInt(pg)===2 && 
            <div className = "newtransactionreceipt">
            <Header2 title='Receipt Transaction'/>
            
                <div className = 'BookingReceiptButtons'>
                    <Button buttonlabel = 'Back' onClick = {back}/>
                </div>
            
            </div>
        }
        </div>
    )
}
export default NewTransaction