//EXERCISE 2

function Greeter({ first, last, age }) {
  console.log(React);
  return (
    <>
      <h2>
        Hello {first} {last}, you're {age}!!!!
      </h2>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="K" last="M" age="30" />);