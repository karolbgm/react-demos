//---------------------STATE------------------------------------------------

function addMinutes(date, minutes) {
  //we multiply minutes by 60000 is to convert minutes to milliseconds
  return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
  //this is a state array [time, setTime] --> time = stateArray[0] setTime = stateArray[1]
  //THIS IS A DESTRUCTURED ARRAY!!! useState is actually an array
  // const stateArray = useState(new Date());
  // const time = stateArray[0];
  // const setTime = stateArray[1];

  //[DATA, FUNCTION TO SET DATA]
  const [time, setTime] = React.useState(new Date());

  const handleClick = () => {
    setTime(addMinutes(time, 10));
  };

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={handleClick}>+ 10 Minutes</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Clock />);