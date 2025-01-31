import React, {useState} from 'react'

function UpdateList(){

    const [Food, setFood]=useState(["Apple", "Orange", "Banana", "Grapes", "Pomogranate"]);
    
    function updateFood(){
        const newFood=document.getElementById("foodlist").value;
        document.getElementById("foodlist").value="";
        setFood(f=>[...f, newFood]);
    }
    function RemoveFood(index){
        setFood(Food.filter((_,i)=>i!==index))
    }

    return(
        <div>
            <h2>The list of Food Items</h2>
            <ul>{Food.map((food, index)=><li className="Foodlist" key={index} onClick={()=>RemoveFood(index)}>{food} </li>)}</ul>
            <input id="foodlist" placeholder='Enter a fruit name'/>
            <button onClick={updateFood}>Add fruit</button>
        </div>
    );
}

export default UpdateList