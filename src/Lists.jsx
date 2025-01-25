import PropTypes from 'prop-types';
function List(props){

    const ItemList=props.items;
    const category=props.Category;
   
    const ListItems=ItemList.map(item => <li key={item.Id}>{item.Name}: &nbsp; {item.Calories}</li>);
    return(
           <div>
               <h3 className="Caty">{category}</h3>
               <ul className="fruitlist">{ListItems}</ul>

           </div>
            
    );
}
List.defaultProps={
    Category: "Category",
    items: [], 
}

List.PropTypes={
    Category: PropTypes.string,
    items:  PropTypes.arrayOf(PropTypes.shape({Id: PropTypes.number, Name:PropTypes.string, Calories: PropTypes.number })),
}
export default  List
