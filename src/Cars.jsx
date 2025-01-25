import React, {useState} from 'react'
function Cars(){
    const [car, setCar]=useState({year:2024, make:"volkswagon", model:"BMW"});
    const updateCary=(e)=>{
        setCar(c=>({...c, year:e.target.value}));
    }
    const updateCarm=(e)=>{
        setCar(c=>({...c,make: e.target.value}));
    }
    const updateCamor=(e)=>{
        setCar(c=>({...c,model: e.target.value}));
    }  
      return(
        <div>
            <p>My favourite Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" onChange={(e)=>updateCary(e)} value={car.year}></input>
            <input  onChange={(e)=>updateCarm(e)} value={car.make}></input>
            <input  onChange={(e)=>updateCamor(e)} value={car.model}></input>   
        </div>
    );
}
export default Cars