// const { useState } = React;



const {useForm} = ReactHookForm;

function ContactUsForm() {
//   const [department, setDepartment] = useState("");
//   const [message, setMessage] = useState("");
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [errors, setErrors] = useState({});

const {register, handleSubmit, formState: {errors}} = useForm();

//   function validateForm() {
//     const newErrors = {};
//     if (!department) newErrors.department = "Department is required.";
//     if (!message) newErrors.message = "Message is required.";
//     if (!agreedToTerms)
//       newErrors.agreedToTerms = "You must agree to the terms.";
//     return newErrors;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       console.log("Form submitted:", { department, message, agreedToTerms });
//     }
//   }

function sendData(data) {
    console.log(data);
}

  return (
    <form className="mt-4" onSubmit={handleSubmit(sendData)}>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">
          Department
        </label>
        <select
          id="department"
          className={`form-select ${errors.department ? "is-invalid" : ""}`}
         {...register("department", { required: "Department is required" })}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </select>
        {errors.department && (
          <div className="invalid-feedback">{errors.department.message}</div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          cols="30"
          rows="5"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <div className="invalid-feedback">{errors.message.message}</div>
        )}
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          id="agreedToTerms"
          className={`form-check-input ${
            errors.agreedToTerms ? "is-invalid" : ""
          }`}
          {...register("agreedToTerms", { required: "Agree to terms is required" })}

          
        />
        <label htmlFor="agreedToTerms" className="form-check-label">
          I agree to the terms and conditions.
        </label>
        {errors.agreedToTerms && (
          <div className="invalid-feedback">{errors.agreedToTerms.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <ContactUsForm />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);