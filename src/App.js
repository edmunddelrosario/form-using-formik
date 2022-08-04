// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    
    onSubmit: (values) => {
      alert("Login Successful");
    },

    validate: (values) => {
      const errors = {};
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) errors.password = "field required";

      return errors;
    },
  })

  return (
    <div className="login-card">
      <h1>LOGIN</h1>
      <form className="card" onSubmit={formik.handleSubmit}>
        <div>Email Address</div>
        <input 
          id="emailField"
          type="text"
          name="email"
          placeholder="name@email.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}

        <div>Password</div>
        <input 
            id="pswField" 
            type="text"
            placeholder="********"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}

        <div>
          <button id="submitBtn" type="submit" className="button">Submit</button>
        </div>        
      </form>
    </div>
  );
}

export default App;
