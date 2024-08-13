const { useForm } = window.ReactHookForm;

function ContactUsForm() {
  //useForm returns an obj
  //handleSubmit is a function
  //formState: {errors} ----> this is creating an alias for formState, the {errors} obj
  //the register obj returns these props:{name, value, onChange}, so we need to delete that
  //data
  const { register, handleSubmit, watch} = useForm();

  //functions
  function sendData(data) {
    console.log(data);
  }

  //html
 
  //handleSubmit will be called first, to check the form, then after it's done, it calls sendData
  return (
  
    <form className="card p-4" onSubmit={handleSubmit(sendData)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="department">
          Department
        </label>
        <select className="form-select" id="department" {...register("department")}>
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
        <textarea className="form-control" id="message" rows="6" {...register("message")}></textarea>
      </div>
      <div className="mb-4 form-check">
        <input className="form-check-input d-" type="checkbox" id="agreedToTerms" {...register("agreedToTerms")} />
        <label className="form-check-label" htmlFor="agreedToTerms">
          I agree to the terms and conditions
        </label>
      </div>
      <hr />
      <div className="d-flex gap-2 mt-2 justify-content-end">
        <button className="btn btn-primary" type="submit">
          Send
        </button>
        <button className="btn btn-outline-primary">Cancel</button>
      </div>
      <pre>{JSON.stringify(watch())}</pre>
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
