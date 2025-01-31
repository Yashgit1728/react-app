import React, {useState} from "react"

function Input(){
    const [name, setName]=useState();
    const [quantity, setQuantity]=useState();
    const [comment, setComment]=useState();
    const [payment, setPayment]=useState();
    const [paymentMethod, setMethod]=useState("Online");
    
    const updateName=(e)=>{
         setName(e.target.value);
    }

    const updateQuantity=(e)=>{
        setQuantity(e.target.value);
    }
    
    function updateComment(e){
        setComment(e.target.value);
    }

    function updatePayment(e){
        setPayment(e.target.value);
    }

    function updatePaymentMethod(e){
        setMethod(e.target.value);
    }
    return(
        <div>
            <input value={name} onChange={(e)=>updateName(e)}></input>
            <p>Name: {name} </p>
            <input value={quantity} onChange={(e)=>updateQuantity(e)} type="number"></input>
            <p>Quantity: {quantity} </p>
            <textarea value={comment} onChange={updateComment} placeholder="Enter Delivery instructions">
            </textarea>
            <p>Comment: {comment}</p>
            <select value={payment} onChange={updatePayment}>
              <option value="">Select an Option</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="Rupay">Rupay</option>
            </select>
            <p>Payment: {payment}</p>
            <br/>
            <label>
               
            <input type="radio" value="Cash on Delivery" onChange={updatePaymentMethod}
            checked={paymentMethod==="Cash on Delivery"}></input>
             Cash on Delivery
            </label>
            <label>
                
            <input type="radio" value="Online" onChange={updatePaymentMethod} checked={paymentMethod==="Online"}>
            
            </input>
            Online
            </label>
            <p>Payment Method: {paymentMethod}</p>

        </div>
    );
}


export default Input