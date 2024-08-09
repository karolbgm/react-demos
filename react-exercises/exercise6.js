//EXERCISE 6 - Conditional rendering
function App() {
  // const [user, setUser] = React.useState(undefined);
  const [user, setUser] = React.useState({
    first: "James",
    last: "Roday"
  })

  return <AccountHeader loggedUser={user} />;
}

function AccountHeader({ loggedUser }) {
  return (
    <>

      {loggedUser ? (
        <span>
          {loggedUser.first} {loggedUser.last}
        </span>
      ) : (
        <a href="/">Sign In</a>
      )}
    </>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);