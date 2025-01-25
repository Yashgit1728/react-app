function Card(props){
    return(
        <div className="Card">
            <img className="Card-image" src={props.Src} alt={props.alt_tag}></img>
            <h2 className="Card-title">{props.Title}</h2>
            <p className="Card-content">{props.Content}</p>
        </div>
    );
}
export default Card