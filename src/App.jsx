import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import User from './UserGreetings.jsx'
import List from './Lists.jsx'
import Profilepic from './profilepic.jsx'
import Click from './click.jsx'
import Mycomponent from './Mycomponent.jsx'
import Button from './Button/Button.jsx';
import Cars from './Cars.jsx'
import Input from './Input.jsx'
import Todo from './Todo.jsx'
import Screen from './Screensize.jsx'
import CarUpdate from './CarUpdate.jsx'
import Card_one from './Card_one.jsx'
import ComponentA from './ComponentA.jsx'
import UpdateList from './UpdateList.jsx'
import Anime1 from './assets/Itachi.jpg'
import Anime2 from './assets/Sasuke.jpg'
import Anime3 from './assets/Naruto.jpg'

function App() {
  const fruits=[
    {Id:1, Name:"Banana", Calories: 115 },
    {Id:2, Name:"Apple", Calories: 75 },
    {Id:3, Name:"Mango", Calories: 102 },
    {Id:4, Name:"Guava", Calories: 89 },
    {Id:5, Name:"Pomogranate", Calories: 95 },
];
const vegetables=[
  {Id:1, Name:"Tomatoes", Calories: 115 },
  {Id:2, Name:"Carrot", Calories: 75 },
  {Id:3, Name:"Bitter gourd", Calories: 102 },
  {Id:4, Name:"Lady's finger", Calories: 89 },
  {Id:5, Name:"Bottle gourd", Calories: 95 },
];
  return(
    <>
    <Header></Header>
    <Food></Food>
    <User isLogged={true} username="Itachi Uchiha"/>
    <Card Src={Anime1} alt_tag="Itachi anime" Title="Itachi Uchiha" Content="A seemingly cold and calculating ninja, driven by a complex past and a deep love for his village"/>
    <Card Src={Anime2} alt_tag="Sasuke anime" Title="Sasuke Uchiha" Content="A brooding, revenge-driven ninja with exceptional talent and powerful abilities"/>
    <Card Src={Anime3} alt_tag="Naruto anime" Title="Naruto Uzumaki" Content="A loud, determined ninja with a dream to become Hokage"/>
    {fruits.length> 0 && <List items={fruits} Category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} Category="vegetables"/>}
    <Profilepic />
    <Mycomponent />
    <Click />
    <Input />
    <Cars />
    <Todo />
    <Screen />
    <CarUpdate/>
    <Card_one Title="Total people" Content="50,000"/>
    <ComponentA />

    <UpdateList />
    <Button />
    <Footer></Footer>
   
    </>
    
  );
}

export default App
