//-------------------COMPONENTS PRACTICE-------------------------------------------
//EXERCISE 1

// function Greeter() {
//   return <h2>Hiiiiiiiiii!</h2>;
// }

//EXERCISE 2

// function Greeter2({ first, last, age }) {
//   console.log(React);
//   return (
//     <>
//       <h2>
//         Hello {first} {last}, you're {age}!!!!
//       </h2>
//     </>
//   );
// }

//EXERCISE 3 AND 4

function App() {
  const [message, setMessage] = React.useState("");

  function display() {
    return alert("Boo");
  }

  const displayMessage = () => {
    setMessage("Message in bottle");
  };

  return (
    <>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde error nobis molestias veritatis repellendus.
        Fugiat deleniti corporis nobis dignissimos reiciendis explicabo et! Recusandae qui sed quod magni exercitationem
        voluptatibus nihil.
      </div>
      <button onClick={display}>Display</button>
      <button onClick={displayMessage}>Display Message</button>
      <div>{message}</div>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById('root')).render(<Greeter2 first="K" last="M" age="30" />);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// //---------------------STATE------------------------------------------------

// function addMinutes(date, minutes) {
//   //we multiply minutes by 60000 is to convert minutes to milliseconds
//   return new Date(date.getTime() + minutes * 60000);
// }

// function Clock() {
//   //this is a state array [time, setTime] --> time = stateArray[0] setTime = stateArray[1]
//   //THIS IS A DESTRUCTURED ARRAY!!! useState is actually an array
//   // const stateArray = useState(new Date());
//   // const time = stateArray[0];
//   // const setTime = stateArray[1];

//   //[DATA, FUNCTION TO SET DATA]
//   const [time, setTime] = React.useState(new Date());

//   const handleClick = () => {
//     setTime(addMinutes(time, 10));
//   };

//   return (
//     <div>
//       <p>{time.toLocaleTimeString()}</p>
//       <button onClick={handleClick}>+ 10 Minutes</button>
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Clock />);

//EVENTS
//main.js
// function handleClick() {
//   console.log("clicked");
// }

// function App() {
//   return <button onClick={handleClick}>Click me!</button>;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function FruitListItem(props) {
//   function handleClick(id) {
//     console.log(`removed ${id}`);
//   }

//   return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>;
// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FruitList fruits={data} />
// );

// function FruitListItem({name, id, color}){
//   return <li>{name} Id: {id} Color: {color}</li>

// }

// function FruitListItem({fruit}){
//   return <li>{fruit.name} Id: {fruit.id} Color: {fruit.color}</li>

// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} id={fruit.id} name={fruit.name} color={fruit.color}/>
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// function FruitList(props) {
//   const fruitListItems = props.fruits.map((fruit) => (
//     <FruitListItem key={fruit.id} fruit={fruit}/>
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple', color:"red"},
//   { id: 2, name: 'orange',  color:"orange"},
//   { id: 3, name: 'blueberry', color:"blue"},
//   { id: 4, name: 'banana',color:"yellow" },
//   { id: 5, name: 'kiwi',color:"green" },
// ];

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <FruitList fruits={data} />
// );

// function HelloWorld() {
//     return <div className="container">Hello Element</div>;
// }

// const rootElement = document.getElementById('root'); //this gets the div with id of root
// ReactDOM.createRoot(rootElement).render(<HelloWorld/>); //this wraps the div element in a virtual root element, which takes a render method, which takes the component we wrote

// function HelloWorld() {
//   return <div className="container">Hello Function Component</div>;
// }

// function App() {
//   //this is your entire application (app)
//   return (
//     <>
//       {/* react fragment: <> */}
//       <HelloWorld />
//       <HelloWorld />
//       <HelloWorld />
//       <HelloWorld />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
