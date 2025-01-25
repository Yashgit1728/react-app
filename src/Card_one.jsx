function Card_one(props){
    return(
        <div className="Card1">
            <h2 className="Card-title1">{props.Title}</h2>
            <p className="Card-content1">{props.Content}</p>
        </div>
    );
}
export default Card_one