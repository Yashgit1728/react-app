function Click(){
    const cButton=(e)=> e.target.textContent("OUCH! 🤕")
    return (
      <button onClick={(e)=>cButton(e)}>Click me 😊</button>
    );
}

export default Click