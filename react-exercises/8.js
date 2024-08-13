//CRAIG'S VERSION
const { useState } = React;

function ContactUsForm() {
  //data
  const [department, setDepartment] = useState("");
  let [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  //functions
  function handleSubmit(event) {
    event.preventDefault();
    const data = { department, message, agreedToTerms };
    console.log(data);
  }

  //html

  return (
    <form className="card p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="department">
          Department
        </label>
        <select
          className="form-select"
          name="department"
          id="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        >
          <option value="">Select...</option>
          <option value="HR">Human Resources</option>
          <option value="PR">Public Relations</option>
          <option value="SUPPORT">Support</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-control"
          name="message"
          id="message"
          rows="6"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-4 form-check">
        <input
          className="form-check-input d-"
          type="checkbox"
          name="agreedToTerms"
          id="agreedToTerms"
          checked={agreedToTerms}
          onChange={(event) => setAgreedToTerms(event.target.checked)}
        />
        <label className="form-check-label" htmlFor="agreedToTerms">
          I agree to the terms and conditions
        </label>
      </div>
      <hr />
      <div className="d-flex gap-2 mt-2 justify-content-end">
        <button className="btn btn-primary">Send</button>
        <button className="btn btn-outline-primary">Cancel</button>
      </div>
    </form>
  );
}

function App() {
  return (
    <div className="container mt-4">
      <ContactUsForm />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//MY VERSION
// const {useState, useEffect} = React;

// function ContactUsForm() {
//     const [department, setDepartment] = useState("");
//     const [message, setMessage] = useState("");
//     const [agreedToTerms, setAgreedToTerms] = useState(false);
  
//     const handleChangeMessage = (event) => {
//       setMessage(event.target.value);
//     };
//     const handleChangeDepartment = (event) => {
//       setDepartment(event.target.value);
//     };
//     const handleChangeTerms = (event) => {
//       if (event.target.checked == true) {
//         setAgreedToTerms(true);
//       } else {
//         setAgreedToTerms(false);

//       }
//     };
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       console.log(department, message, agreedToTerms);
      
//     }
  
//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <select name="department" id="department" value={department} onChange={handleChangeDepartment}>
//             <option value="">Select one</option>
//             <option value="HR">Human Resources</option>
//             <option value="PR">Public Relations</option>
//             <option value="S">Support</option>
//           </select>
//           <textarea name="message" id="message" value={message} onChange={handleChangeMessage}></textarea>
//           <label htmlFor="terms">I agree to the terms and conditions</label>
//           <input type="checkbox" name="terms" id="terms" checked={agreedToTerms} onChange={handleChangeTerms} />
//           <button type="submit">Send</button>
//           <pre>{JSON.stringfy(department, message, agreedToTerms)}</pre>
//         </form>
//       </>
//     );
//   }
  
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