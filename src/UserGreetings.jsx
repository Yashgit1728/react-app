function User(props){
   
   const m=<h2>Welcome {props.username}</h2>
   const n= <h2>Please log in to continue</h2>
     
   
    return(
       props.isLogged ?  m:  n
    );

}
export default User