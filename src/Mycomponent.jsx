import React, {useState} from 'react'
function Mycomponent(){
    const [name, setName]=useState("Yashwanth");
    const [age, setAge]=useState(0);
    const [isEmployed, setIsEmployed]=useState(true);
    const [count, icount]=useState(0);
    const updateName=()=>{
        setName("Yash")
    }
    const updateAge=()=>{
        setAge(age+1)
    }
    const updateIsEmployed=()=>{
        setIsEmployed(!isEmployed)
    }
    const Increase=()=>{
       icount(count+1)
    }
    const Decrease=()=>{
        icount(count-1)
     }
     const Reset=()=>{
        icount(0)
     }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>
            <p>Is he Employed: {isEmployed ? "Yes" :"No"}</p>
            <button onClick={updateIsEmployed}>Toggle Employee status</button>
            <div className="count">
            <p>{count}</p>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
            <button onClick={Reset}>Reset</button>
            </div>
        </div>
    );
}
export default Mycomponent