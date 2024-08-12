console.log(window.ReactRouterDOM);



// const {useForm} = ReactHookForm; 
// function SigninForm() {

//  const {register, handleSubmit} = useForm();
 
//  console.log(register("username"));
//  console.log(register("password"));
 
//     const signIn = (data) => {
//       console.log(data); //data as an object

//     };
  
//     return (
//         //it will only pass into handleSubmit when my form is valid ---> then it's gonna do the event.preventDefault()
//       <form onSubmit={handleSubmit(signIn)}>
//         <input
//           type="text"
//           //using the spread operator (...) --> spreads the properties
//           {...register("username")} //---> it will spread all the properties of register with username as a name, onChange, ref, etc
          
//         />
//         <input
//           type="password"
//           {...register("password")}
//         />
//         <button type="submit">Sign In</button>
//       </form>
//     );
//   }
  
//   ReactDOM.createRoot(document.getElementById('root')).render(<SigninForm />);


// const { useState } = React;

// function ContactUsForm() {
//   const [department, setDepartment] = useState("");
//   const [message, setMessage] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [errors, setErrors] = useState({});

//   function validateForm() {
//     const newErrors = {};
//     //!department checks for falsy, if it is falsy (null, undefined, 0) ---> then add the variable to the newErrors obj
//     if (!department) newErrors.department = "Department is required.";
//     if (!message) newErrors.message = "Message is required.";
//     if (!agreedToTerms)
//       newErrors.agreedToTerms = "You must agree to the terms.";
//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const validationErrors = validateForm();
//     //
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Form submitted:", { department, message, agreedToTerms });
//     }
//   }

//   return (
//     <form class="mt-4" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="department" className="form-label">
//           Department
//         </label>
//         <select
//           id="department"
//           className={`form-select ${errors.department ? "is-invalid" : ""}`}
//           name="department"
//           value={department}
//           onChange={(e) => setDepartment(e.target.value)}
//         >
//           <option value="">Select...</option>
//           <option value="hr">Human Resources</option>
//           <option value="pr">Public Relations</option>
//           <option value="support">Support</option>
//         </select>
//         {errors.department && (
//           <div className="invalid-feedback">{errors.department}</div>
//         )}
//       </div>

//       <div className="mb-3">
//         <label htmlFor="message" className="form-label">
//           Message
//         </label>
//         <textarea
//           id="message"
//           className={`form-control ${errors.message ? "is-invalid" : ""}`}
//           name="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           cols="30"
//           rows="5"
//         />
//         {errors.message && (
//           <div className="invalid-feedback">{errors.message}</div>
//         )}
//       </div>

//       <div className="mb-3 form-check">
//         <input
//           type="checkbox"
//           id="agreedToTerms"
//           className={`form-check-input ${
//             errors.agreedToTerms ? "is-invalid" : ""
//           }`}
//           name="agreedToTerms"
//           checked={agreedToTerms}
//           onChange={(e) => setAgreedToTerms(e.target.checked)}
//         />
//         <label htmlFor="agreedToTerms" className="form-check-label">
//           I agree to the terms and conditions.
//         </label>
//         {errors.agreedToTerms && (
//           <div className="invalid-feedback">{errors.agreedToTerms}</div>
//         )}
//       </div>

//       <button type="submit" className="btn btn-primary">
//         Send
//       </button>
//     </form>
//   );
// }

// function App() {
//   return (
//     <div className="container">
//       <ContactUsForm />
//     </div>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);