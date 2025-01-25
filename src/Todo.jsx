import React, {useState} from 'react'

function Todo(){
    const [tasks, setTasks]=useState([]);
    const [newTask, setNewtask]= useState("");

    function taskHandler(e){
        setNewtask(e.target.value);
    }

    function addTask(e){
        if(newTask.trim() !==""){
        setTasks(t=>([...t, newTask]));
        setNewtask("");
        }
    }
    
    function RemoveTask(index){

        setTasks(t=>t.filter((_,i)=>i!==index))
        
    }

    function goUp(index){
        if (index>0) {
        const updateTask=[...tasks];
        [updateTask[index-1],updateTask[index]]=[updateTask[index],updateTask[index-1]]
        setTasks(updateTask)
        }
    }

    
    function goDown(index){
        if (index<tasks.length-1) {
        const updateTask=[...tasks];
        [updateTask[index+1],updateTask[index]]=[updateTask[index],updateTask[index+1]]
        setTasks(updateTask)
        }
    }

    return(
        <div className="Tasks">
            <h1>To-do List</h1>
            <h3>Add the Task below:</h3>
            <input id="task" placeholder='Enter the task' value={newTask} onChange={taskHandler}/>
            <button onClick={addTask}>Add Task</button>
            <ul className="todolist">{tasks.map((t, index)=><li key={index}><span>{t}</span> <button onClick={()=>RemoveTask(index)}>Delete</button> <button onClick={()=>goUp(index)}>☝️</button> <button onClick={()=>goDown(index)}>👇</button></li>)}</ul>
        </div>
    );
}

export default Todo