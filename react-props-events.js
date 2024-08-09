//EVENTS
//EXAMPLE 1
function handleClick() {
  console.log("clicked");
}

function App() {
  return <button onClick={handleClick}>Click me!</button>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//EXAMPLE 2
function FruitListItem(props) {
  function handleClick(id) {
    console.log(`removed ${id}`);
  }

  return <li onClick={() => handleClick(props.fruit.id)}>{props.fruit.name} </li>;
}

function FruitList(props) {
    const data = [
      { id: 1, name: 'apple' },
      { id: 2, name: 'orange' },
      { id: 3, name: 'blueberry' },
      { id: 4, name: 'banana' },
      { id: 5, name: 'kiwi' },
    ];
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit} />
  ));
  return <ul>{fruitListItems}</ul>;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <FruitList fruits={data} />
);

//EXAMPLE 3
function FruitListItem({name, id, color}){
  return <li>{name} Id: {id} Color: {color}</li>

}

function FruitListItem({fruit}){
  return <li>{fruit.name} Id: {fruit.id} Color: {fruit.color}</li>

}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} id={fruit.id} name={fruit.name} color={fruit.color}/>
  ));
  return <ul>{fruitListItems}</ul>;
}

function FruitList(props) {
  const fruitListItems = props.fruits.map((fruit) => (
    <FruitListItem key={fruit.id} fruit={fruit}/>
  ));
  return <ul>{fruitListItems}</ul>;
}

const data = [
  { id: 1, name: 'apple', color:"red"},
  { id: 2, name: 'orange',  color:"orange"},
  { id: 3, name: 'blueberry', color:"blue"},
  { id: 4, name: 'banana',color:"yellow" },
  { id: 5, name: 'kiwi',color:"green" },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <FruitList fruits={data} />
);


//EXAMPLE 4
function HelloWorld() {
    return <div className="container">Hello Element</div>;
}

const rootElement = document.getElementById('root'); //this gets the div with id of root
ReactDOM.createRoot(rootElement).render(<HelloWorld/>); //this wraps the div element in a virtual root element, which takes a render method, which takes the component we wrote


//EXAMPLE 5
function HelloWorld() {
  return <div className="container">Hello Function Component</div>;
}

function App() {
  //this is your entire application (app)
  return (
    <>
      {/* react fragment: <> */}
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);