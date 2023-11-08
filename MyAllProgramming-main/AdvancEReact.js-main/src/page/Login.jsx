import React, { useState } from 'react';
import "./style/login.css"
function Login() {
  const [light, setLight] = useState(true);
  const toggleDarkMode = () => {
    setLight(!light);
  }

  //user information
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  //Hiden show password Link start row class 

  const [show , setShow]=useState(false)
  const handleClick=()=>{
    setShow(!show)
  }


  const [errors, setErrors] = useState({});
 
  const VAllErrors = () => {
    let errors = {};
    if (!user.password) {
      errors.password = "password is required";
    }else if(user.password.length < 7 || user.password.length > 20){
      errors.password = "Password length must be between 7 and 20 characters";
    }

    if (user.name.length < 5 || user.name.length > 15) {
      errors.name = "Name length must be between 5 and 15 characters";
    } else if (!/[A-Z]/.test(user.name)) {
      errors.name = "Name should contain at least one uppercase letter";
    } else if (!/[*\-#&]/.test(user.name)) {
      errors.name = "Name should contain at least one special character";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noErrors = VAllErrors(); // Check if there are no validation errors
    if (noErrors) {
      // Here you can perform any actions with the user data, e.g., send it to an API or do something with it.
      console.log("User data:", user);
    }else{
      
    }
  }
  return (
    <div>
           <button onClick={toggleDarkMode}>
        {light ? "Dark" : "Light"}
      </button>
      <div className="allone"  style={{backgroundColor: light ? "red" : "blue"}}>
        <div className="forms">
      
 
        <center>    
        <form onSubmit={handleSubmit}>
          <input type="text" value={user.name} name="name" onChange={handleChange} placeholder='Name' />
          {errors.password && <span>{errors.name}</span>}
          <br />
          <input type="email" value={user.email} name="email" onChange={handleChange} placeholder='Email' />
          <br />
          <input type={show ? "text" : "password"} value={user.password} name="password" onChange={handleChange} placeholder='Password' />
          {errors.password && <span>{errors.password}</span>}
          <label  onClick={handleClick}>{show ? "show" : "hiden"}</label>
          <br />
          <button type="submit">Sign in</button>
        </form>
        </center>
      </div>
      </div>
      <br />
      <br />
      <h1 style={{ color: light ? 'black' : 'red', fontSize: light ? "1rem" : "3rem" }}>
        Hello, I am Jugal Sharma. What the heck!
      </h1>
  
 
    </div>
  );
}

export default Login;
