import { useState } from 'react';
import {useHistory, useParams} from 'react-router'



const NewTransaction = () => {
    //The pg param is used to track what page the transaction is currently in
    const {pg} = useParams();

    //Buttons are used to proceed forward and backward through the transaction process
    const history = useHistory();

    //Transaction motive
    const tranoptionlist = [
        {value: 'Deposit'},
        {value: 'Withdraw'}
    ]

    //Information
    const [transactionamount, setTransactionAmount] = useState(0);

    //Reason
    const [reason, setReason] = useState("");

    //TextBox
    const [textbox, setTextBox] = useState("");

    //Automatically Calculate Vars for Log
    const [transactionid, setTransactionId] = useState("")
    const [transactiontime, setTransactionTime] = useState("");





    const confirmInput = () =>{
        if(ValidateInput()){

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

    //Page Display
    return (
        <div className = "NewTransaction">
            <h1>New Transaction</h1>
            
      </div>
      )
  }
export default NewTransaction