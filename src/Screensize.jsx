import react, {useState, useEffect} from 'react'

function Screen(){

    const [count, setCount]=useState(0);
    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", changeSize)
        console.log("Added Event Listener")
        document.title=`Count: ${count}, ${width}x${height}`
        return(()=>{
            window.removeEventListener("resize", changeSize)
            console.log("Removed Event Listener")
        })
        
        
    }, [count, width, height]);

    function addCount(){
        setCount(c=>c+1);
    }

    

    function changeSize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <h2>Count: {count}</h2>
        <h3>Widowns screen width:{width}</h3>
        <h3>Widowns screen height:{height}</h3>
        <button onClick={addCount}>Add</button>
        </>
    );
}

export default Screen