import Recat, {useState, createContext} from 'react'
import ComponentB from './ComponentB.jsx';
export const userContext=createContext();
function ComponentA(){
    
    const [user, setUser]=useState("Bro Code");
    return(<div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
            <ComponentB user={user} />
        </userContext.Provider>
    </div>);
}

export default ComponentA