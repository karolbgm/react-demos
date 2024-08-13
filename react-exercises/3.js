//EXERCISE 3 AND 4

function App() {
  //CODE GOES HERE (LOGIC):
  const [message, setMessage] = React.useState("");

  function display() {
    return alert("Boo");
  }

  const displayMessage = () => {
    setMessage("Message in bottle");
  };

  //HMTL GOES HERE (UI):
  return (
    <>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde error nobis molestias veritatis repellendus.
        Fugiat deleniti corporis nobis dignissimos reiciendis explicabo et! Recusandae qui sed quod magni exercitationem
        voluptatibus nihil.</p>
      </div>
      <button onClick={display} style={{margin:"9px"}}>Display</button>
      <button onClick={displayMessage}>Display Message</button>
      <div><p>{message}</p></div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);