## Exercise 1: First Component

1. In `ReactDemos` folder
1. Write a `Greeter` component in React that returns an `h2` with "Hello" inside of the element.
1. Call it using this code ReactDOM.createRoot(document.getElementById("root")).render(<Greeter />);
   1.Run `npm start` to see the result on the index.html page.

## Exercise 2: Props

1. In `ReactDemos` folder
1. Update the `Greeter` component in React to return an `h2` with "Hello Calvin Broadus" inside of the element. The name should come through props.
1. Call it using this code
   `   ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Calvin" last="Broadus" />);`
   1.Refresh index.html page to see the result.
1. Then change the name of the props coming in to another name. Verify it works.
1. Add an age prop and display it.
1. If you aren't already use destructuring in the function parameters so that you don't have to say `props.first` etc...

   ```js
   function Greeter({ first, last, age }) {
     //we are doing this above in the function components parameter list ()
     // let { first, last, age } = props;

     return (
       <h2>
         Hello {first} {last}. He is {age} years old.
       </h2>
     );
   }

   ReactDOM.createRoot(document.getElementById("root")).render(
     <Greeter first="Calvin" last="Broadus" age="52" />
   );
   ```

1. Bonus: Pass the props from an object into the HTML tag for the component

   ```js
   function Greeter({ first, last, age }) {
     // let { first, last, age } = props;
     // console.log(JSON.stringify(props, null, ""));

     return (
       <h2>
         Hello {first} {last}. He is {age} years old.
       </h2>
     );
   }

   let person = {
     first: "Calvin",
     last: "Broadus",
     age: 52,
   };

   ReactDOM.createRoot(document.getElementById("root")).render(
     <Greeter first={person.first} last={person.last} age={person.age} />
   );
   ```

## Exercise 3: Event Handling

1. Create an `App` component and have React render it instead of `Greeter`
2. In the `App` component start with a div with a paragraph of "lorem ipsum" inside of it.
3. Test and verify that works.
4. Add an HTML `button` element below the paragraph and have the button text say "Display"
5. Create a function named display which calls the function `alert("Boo")`
6. Associate the function to the click event of the button
7. Verify it works.

   ```js
   //component function
   function App() {
     //code
     function display() {
       alert("Boo");
     }

     //html
     return (
       <div>
         <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
           necessitatibus minima accusamus. Quidem perferendis eligendi ipsum
           eum repellat, nihil totam, vero, similique suscipit quibusdam
           architecto. Esse dolores voluptates odit laborum.
         </p>
         <button onClick={display}>Display</button>
       </div>
     );
   }

   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
   ```

### Exercise 4: State

1. Create a component `App` and render it
1. Inside the component, put a `message` variable in state and initialize to an empty string "".
1. Add a `button` with the text **Display**
1. Add a `display` function that sets the button to "Message in the bottle"
1. Associate the `display` function with the `onClick` event of the button
1. Open the page, click the `button` and verify the message appears.

   ```js
   //component function
   function App() {
     //code
     // let message = "";
     const [message, setMessage] = React.useState("");

     function display() {
       // message = "Message in the bottle";
       setMessage("Message in the bottle");
     }

     //html
     return (
       <div>
         <button onClick={display}>Display</button>
         <p> {message} </p>
       </div>
     );
   }

   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
   ```

## Exercise 5: Conditional Rendering

1. Create an `App` component and render it inside the root element
1. In the `App` component
   - create a state variable for the currently signed in user called `user`
     - initialize it to `undefined`
     - make a copy of the state variable line and in the duplicated line initialize user state to the following user object
       ```
       {
         first: "James",
         last: "Roday"
       }
       ```
     - comment out the last line where you set the user to an object (for now)
1. Create an `AccountHeader` component
   - render it inside the `App` component
   - pass the `user` state variable as a prop into `AccountHeader`
1. In the `AccountHeader`
   - add a Sign In link (anchor element)
   - add a span element with nothing inside it for now (it will hold the signed in user's name)
   - use the conditional (ternary) operator to check if the user prop exists
     - if `user` display user's first and last name properties inside the
     - else display Sign In link
1. Open the page and verify the link is shown
1. Comment out the line setting user state to `undefined` and uncomment the line setting it to a `user` object

   - Reload and verify the user's first and last name is shown

#### `main.js`

```js
const { useState } = React;

function App() {
  const [user, setUser] = useState(undefined);
  // const [user, setUser] = useState({
  //   first: "James",
  //   last: "Roday",
  // });

  return (
    <>
      <AccountHeader user={user} />
    </>
  );
}

function AccountHeader(props) {
  return (
    <>
      {props.user ? (
        <span>
          Welcome, {props.user.first} {props.user.last}
        </span>
      ) : (
        <a href="#">Sign In</a>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

<!-- ## Exercise 6B: More Conditional Rendering

1. Create a dropdown menu composed of a button and an unordered list of menu items
1. When you click the button hide or show the menu
1. Achieve this using all 3 different syntaxes:
   - if
   - ?
   - && -->

## Exercise 6: Child to Parent Communication

1. Start with the following code

   ```js
   const { useState } = React;

   function FruitListItem(props) {
     return (
       <li>
         {props.fruit.name} | <button>Delete</button>
       </li>
     );
   }

   function FruitList() {
     const [fruits, setFruits] = useState([
       { id: 1, name: "apple" },
       { id: 2, name: "orange" },
       { id: 3, name: "blueberry" },
       { id: 4, name: "banana" },
       { id: 5, name: "kiwi" },
     ]);

     return (
       <ul>
         {fruits.map((fruit) => (
           <FruitListItem key={fruit.id} fruit={fruit} />
         ))}
       </ul>
     );
   }

   function App() {
     return <FruitList />;
   }

   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
   ```

1. Add the function `removeFruit` inside the `FruitList` component
   - the function should take a `fruit `as a parameter
   - use the Array `filter` method to filter out the `fruit` that should be removed and return a new array into a variable you create named `updatedFruits`
   - use the state setter function `setFruits` to update the `fruits` state with the `updatedFruits` array
1. Pass the `removeFruit` function as a prop into each `FruitListItem`. Name the prop `onRemove`
1. Associate the click event of the button in `FruitListItem` with the function coming into props named `onRemove`
   - you need to pass the prop fruit for a given `FruitListItem` to the onRemove function so you will need to wrap `onRemove` in an arrow function to delay the calling of the function until the button is clicked
1. Test the app and verify the appropriate `fruit` is removed when the **delete** button is clicked

---

### `main.js`

```js
const { useState } = React;

function FruitListItem(props) {
  return (
    <li>
      {props.fruit.name} | <button onClick={props.onRemove}>Delete</button>
    </li>
  );
}

function FruitList() {
  //code

  //data
  const [fruits, setFruits] = useState([
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "blueberry" },
    { id: 4, name: "banana" },
    { id: 5, name: "kiwi" },
  ]);

  //functions/event handlers

  function removeFruit(fruit) {
    let updatedFruits = fruits.filter((f) => f.id !== fruit.id);
    setFruits(updatedFruits);
  }

  //html
  return (
    <ul>
      {fruits.map((fruit) => (
        <FruitListItem
          key={fruit.id}
          fruit={fruit}
          onRemove={() => removeFruit(fruit)}
        />
      ))}
    </ul>
  );
}

function App() {
  return <FruitList />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

### Exercise 7: Displaying Teams with Simulated API Call

This exercise demonstrates how to handle asynchronous data fetching and display the results.

1. **Starter Code:**

   - Use the following starter code to set up the fake API and define the `App` component:

   ```js
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
     // Your code will go here
   }

   ReactDOM.createRoot(document.getElementById("root")).render(<App />);
   ```

2. **Define the `App` Component:**

   - Inside `App`:
     - Use the `useState` hook to create two state variables:
       - `busy` to track whether data is being loaded (initialize it to `false`).
       - `teams` to store the list of teams (initialize it to an empty array).
     - Define an `async` function named `loadTeams` that:
       - Sets `busy` to `true`.
       - Uses `await` to get data from `teamAPI.list()`.
       - Sets `busy` to `false` after the data is loaded.
       - Updates the `teams` state with the retrieved data.
     - Use the `useEffect` hook to call `loadTeams` when the component mounts (an empty dependency array should be used).

3. **Render the Data:**

   - Inside the `App` component’s return statement:
     - Conditionally render a "Loading..." message if `busy` is `true`.
     - Map over the `teams` array and render each team in a `div` with the class name `card`. Each `div` should display the team’s name and division.

4. **Add Styles:**

   - Create a `styles.css` file in your project directory.
   - Define the `.card` class in `styles.css` with the following styles:

     ```css
     .card {
       border: 1px solid lightgray;
       padding: 2rem;
       width: 18rem;
     }
     ```

   - Ensure that `styles.css` is linked in your `index.html` file:

     ```html
     <link rel="stylesheet" href="styles.css" />
     ```

 <!-- #### `main.js`

 ```js
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

function App() {
  const [busy, setBusy] = useState(false);
  const [teams, setTeams] = useState([]);
  async function loadTeams() {
    setBusy(true);
    let data = await teamAPI.list();
    setBusy(false);
    setTeams(data);
  }

  useEffect(function () {
    loadTeams();
  }, []);

  return (
    <div>
      {busy && <p>Loading...</p>}
      {teams?.map((team) => (
        <div className="card" key={team.name}>
          <strong>{team.name}</strong>
          <div>{team.division}</div>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

 ```     -->

### Exercise 8: Building a Contact Us Form

In this exercise, you'll build a Contact Us form with state management for multiple form fields and handle form submission.

1. **Set Up the Form Component:**

   - Create a component named `ContactUsForm` and render it inside the root element.
   - Inside the component:
     - Initialize three state variables: `department`, `message`, and `agreedToTerms`.
       - `department` is initialized to an empty string.
       - `message` is initialized to an empty string.
       - `agreedToTerms` is initialized to `false`.
     - Use `React.useState` to manage these state variables.

2. **Create the Form Layout:**

   - Create a `<form>` element and associate a `handleSubmit` function with the form’s `onSubmit` event handler.
   - Inside the form:
     - Add a `<select>` element for selecting a department with options for Human Resources, Public Relations, and Support. Register the `select` with the `department` state.
     - Add a `<textarea>` element for the message input, binding it to the `message` state.
     - Add a checkbox input with a label "I agree to the terms and conditions," and bind it to the `agreedToTerms` state.
     - Add a submit button labeled "Send."

3. **Handle Form Submission:**

   - Implement the `handleSubmit` function to prevent the default form submission behavior using `event.preventDefault()`.
   - Inside `handleSubmit`, log the form data to the console by converting the state to a string using the `stateToString` function.

4. **State to String Conversion:**

   - Implement the `stateToString` function to convert the form state into a JSON string for logging.

5. **Testing the Form:**
   - Run the application and verify that the form behaves as expected:
     - When you select a department, enter a message, and check the "I agree to the terms and conditions" checkbox, the form state should update accordingly.
     - When you click "Send," the form data should be logged to the console as a JSON string.

---

<!-- #### `main.js`

```js
function ContactUsForm() {
  const [department, setDepartment] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitting", stateToString());
  }

  function stateToString() {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms,
      },
      null,
      " "
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="10"
      />
      <br />
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions.
      <br />
      <button>Send</button>
    </form>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ContactUsForm />);
``` -->

## Exercise 9: Forms | Validation

sign in

## Exercise 10: Forms | Data with React Hook Form

sign in

## Exercise 11: Forms | Validation with React Hook Form

sign in

## Exercise 12: Promises and async await

## Exercise 13: fetch API

## Exercise 14: Router

```

```