import React, {useState} from 'react'
function CarUpdate(){
    const [cars, setCars]=useState([]);
    const [carYear, setCaryear]=useState(new Date().getFullYear());
    const [carMake, setCarmake]=useState("");
    const [carMode, setCarmodel]=useState("");

    function updateCaryear(e){
        setCaryear(e.target.value);
    }
    function updateCarmake(e){
        setCarmake(e.target.value);
    }
    function updateCarmodel(e){
        setCarmodel(e.target.value);
    }

    function addCar(){

        const newCar={year: carYear,
            make: carMake,
            model: carMode
        }
        setCars(c=>[...c, newCar])

        setCaryear(new Date().getFullYear());
        setCarmake("");
        setCarmodel("");

    }
    function RemoveCar(index){
        setCars(c=>c.filter((_,i)=>i!==index))
    }

    return(
        <div>
        <h2>My favourite list are below and add yours:</h2>
        <ul>
            {cars.map((c, index)=><li key={index} onClick={()=>RemoveCar(index)}>{c.year} {c.make} {c.model}</li>)}
            </ul>
        <input type="number" value={carYear} onChange={updateCaryear}/>
        <input value={carMake} onChange={updateCarmake}/>
        <input value={carMode} onChange={updateCarmodel}/>
        <button onClick={addCar}>Add Car</button>
        </div>
    );
}

export default CarUpdate