const { useState, useEffect } = React;

const nbaTeams = [
  { name: "Los Angeles Lakers", division: "Pacific" },
  { name: "Chicago Bulls", division: "Central" },
  { name: "Miami Heat", division: "Southeast" },
  { name: "Dallas Mavericks", division: "Southwest" },
];

const teamAPI = {
  list() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(nbaTeams);
      }, 1000);
    });
  },
};

// Define the App component here
function App() {
  const [busy, setBusy] = useState(false)
  const [teams, setTeams] = useState([])

  async function loadTeams() {
    setBusy(true)
    setTeams(await teamAPI.list())
    setBusy(false)
  }

  useEffect(() => {
    loadTeams()
  }, [])

  return (<>
  {busy && <div>Loading...</div>}
  {teams.map(team => <div key={team.name} className="card">{team.name} - {team.division}</div>)}
  </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


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