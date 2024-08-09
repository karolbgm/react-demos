//EXERCISE 5
//using if statement

function FruitList(){
  let fruitList;
  const [isOpen, setIsOpen] = React.useState(true)

  function displayAll() {
    setIsOpen((isOpen) => !isOpen)

  }
  if (isOpen) {
    fruitList =
    <ul>
      <li>Banana</li>
      <li>Goiaba</li>
      <li>Grapes</li>
    </ul>

}
  return(
    <>
    <button onClick={displayAll}>Display Fruits</button>
    {fruitList}
    </>
  )
}

// using Ternary Operator

function FruitList(){
  const [isOpen, setIsOpen] = React.useState(true)

  function displayAll() {
    setIsOpen((isOpen) => !isOpen)

  }

  return(
    <>
    <button onClick={displayAll}>Display Fruits</button>
    {isOpen ?
    <ul>
      <li>Banana</li>
      <li>Goiaba</li>
      <li>Grapes</li>
    </ul>
     : null}
    </>
  )
}

// using logical &&

function FruitList() {
  const [isOpen, setIsOpen] = React.useState(true);

  function displayAll() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button onClick={displayAll}>Display Fruits</button>
      {isOpen && (
        <ul>
          <li>Banana</li>
          <li>Goiaba</li>
          <li>Grapes</li>
        </ul>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<FruitList />);