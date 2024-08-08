//-------------------REACT EXERCISES-------------------------------------------
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

// function App() {
//   //CODE GOES HERE (LOGIC):
//   const [message, setMessage] = React.useState("");

//   function display() {
//     return alert("Boo");
//   }

//   const displayMessage = () => {
//     setMessage("Message in bottle");
//   };

//   //HMTL GOES HERE (UI):
//   return (
//     <>
//       <div>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde error nobis molestias veritatis repellendus.
//         Fugiat deleniti corporis nobis dignissimos reiciendis explicabo et! Recusandae qui sed quod magni exercitationem
//         voluptatibus nihil.</p>
//       </div>
//       <button onClick={display} style={{margin:"9px"}}>Display</button>
//       <button onClick={displayMessage}>Display Message</button>
//       <div><p>{message}</p></div>
//     </>
//   );
// }

//EXERCISE 5
//using if statement

// function FruitList(){
//   let fruitList;
//   const [isOpen, setIsOpen] = React.useState(true)

//   function displayAll() {
//     setIsOpen((isOpen) => !isOpen)

//   }
//   if (isOpen) {
//     fruitList =
//     <ul>
//       <li>Banana</li>
//       <li>Goiaba</li>
//       <li>Grapes</li>
//     </ul>

// }
//   return(
//     <>
//     <button onClick={displayAll}>Display Fruits</button>
//     {fruitList}
//     </>
//   )
// }

//using Ternary Operator

// function FruitList(){
//   const [isOpen, setIsOpen] = React.useState(true)

//   function displayAll() {
//     setIsOpen((isOpen) => !isOpen)

//   }

//   return(
//     <>
//     <button onClick={displayAll}>Display Fruits</button>
//     {isOpen ?
//     <ul>
//       <li>Banana</li>
//       <li>Goiaba</li>
//       <li>Grapes</li>
//     </ul>
//      : null}
//     </>
//   )
// }

//using logical &&

// function FruitList() {
//   const [isOpen, setIsOpen] = React.useState(true);

//   function displayAll() {
//     setIsOpen((isOpen) => !isOpen);
//   }

//   return (
//     <>
//       <button onClick={displayAll}>Display Fruits</button>
//       {isOpen && (
//         <ul>
//           <li>Banana</li>
//           <li>Goiaba</li>
//           <li>Grapes</li>
//         </ul>
//       )}
//     </>
//   );
// }

//EXERCISE 6 - Conditional rendering
// function App() {
//   // const [user, setUser] = React.useState(undefined);
//   const [user, setUser] = React.useState({
//     first: "James",
//     last: "Roday"
//   })

//   return <AccountHeader loggedUser={user} />;
// }

// function AccountHeader({ loggedUser }) {
//   return (
//     <>

//       {loggedUser ? (
//         <span>
//           {loggedUser.first} {loggedUser.last}
//         </span>
//       ) : (
//         <a href="/">Sign In</a>
//       )}
//     </>
//   );
// }

//EXERCISE 7: Child to Parent Communication
// const { useState } = React;

// function FruitListItem(props) {
//   return (
//     <li>
//       {props.fruit.name} | <button onClick={() => props.onRemove(props.fruit)}>Delete</button>
//     </li>
//   );
// }

// function FruitList() {
//   const [fruits, setFruits] = useState([
//     { id: 1, name: "apple" },
//     { id: 2, name: "orange" },
//     { id: 3, name: "blueberry" },
//     { id: 4, name: "banana" },
//     { id: 5, name: "kiwi" },
//   ]);

//   function removeFruit(fruit) {
//     const updatedFruits = fruits.filter((aFruit) => aFruit.id !== fruit.id);
//     setFruits(updatedFruits);
//   }

//   return (
//     <ul>
//       {fruits.map((fruit) => (
//         <FruitListItem key={fruit.id} fruit={fruit} onRemove={removeFruit} />
//       ))}
//     </ul>
//   );
// }

// function App() {
//   return <FruitList />;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//EXERCISE 8 - previous
// function App() {
//   const [busy, setBusy] = React.useState(false);
//   const [teams, setTeams] = React.useState([]);

//   const nbaTeams = [
//     {
//       name: "Los Angeles Lakers",
//       division: "Pacific",
//     },
//     {
//       name: "Miami Heat",
//       division: "Southeast",
//     },
//     {
//       name: "Boston Celtics",
//       division: "Atlantic",
//     },
//     {
//       name: "Milwaukee Bucks",
//       division: "Central",
//     },
//     {
//       name: "Dallas Mavericks",
//       division: "Southwest",
//     },
//   ];

//   function loadTeams() {
//     setBusy(true);
//     setTimeout(() => {
//       setBusy(false);
//       setTeams(nbaTeams);
//     }, 1000);
//   }

//   React.useEffect(loadTeams, []);

//   return (
//     <>
//       {busy
//         ? "Loading..."
//         : teams.map((team) => (
//             <div key={team.name} className="card">
//               {team.name} / {team.division}
//             </div>
//           ))}
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//NEW EXERCISE 7
const { useState, useEffect } = React;

// const nbaTeams = [
//   { name: "Los Angeles Lakers", division: "Pacific" },
//   { name: "Chicago Bulls", division: "Central" },
//   { name: "Miami Heat", division: "Southeast" },
//   { name: "Dallas Mavericks", division: "Southwest" },
// ];

// const teamAPI = {
//   list() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(nbaTeams);
//       }, 1000);
//     });
//   },
// };

// // Define the App component here
// function App() {
//   const [busy, setBusy] = useState(false)
//   const [teams, setTeams] = useState([])

//   async function loadTeams() {
//     setBusy(true)
//     setTeams(await teamAPI.list())
//     setBusy(false)
//   }

//   useEffect(() => {
//     loadTeams()
//   }, [])

//   return (<>
//   {busy && <div>Loading...</div>}
//   {teams.map(team => <div key={team.name} className="card">{team.name} - {team.division}</div>)}
//   </>)
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//EXERCISE 8
function ContactUsForm() {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleChangeDepartment = (event) => {
    setDepartment(event.target.value);
  };
  const handleChangeTerms = (event) => {
    if (event.target.checked == true) {
      setAgreedToTerms(true);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(department.toString(), message.toString(), agreedToTerms.toString());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select name="department" id="department" value={department} onChange={handleChangeDepartment}>
          <option value="">Select one</option>
          <option value="human resources">Human Resources</option>
          <option value="public relations">Public Relations</option>
          <option value="support">Support</option>
        </select>
        <textarea name="message" id="message" value={message} onChange={handleChangeMessage}></textarea>
        <label htmlFor="terms">I agree to the terms and conditions</label>
        <input type="checkbox" name="terms" id="terms" checked={agreedToTerms} onChange={handleChangeTerms} />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactUsForm />);

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
