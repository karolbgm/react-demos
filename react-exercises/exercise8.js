const {useState, useEffect} = React;

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