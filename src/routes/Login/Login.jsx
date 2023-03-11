import { validateUsername, validatePassword } from "../../assets/validation";
import './Login.scss'
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";


function Login() {
  const [ userData, setUserData ] = useState({ username: "", password: "" });
  const [ message, setMessage ] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    if(event.target.name === "email") {
      setUserData({ ...userData, ["username"]: event.target.value });
      validateUsername({ ...userData, ["username"]: event.target.value }, message, setMessage);
    }

    if(event.target.name === "password") {
      setUserData({ ...userData, ["password"]: event.target.value });
      validatePassword({ ...userData, ["password"]: event.target.value }, message, setMessage);
    }
  }

  const [ disableButton, setDisableButton ] = useState(true);
  const { login }  = useContext(AppContext);

  useEffect(() => {
    if(message.username === '' && message.password === ''){
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [message])

  return(
    <Fragment>
      <form action="">
        <label htmlFor="email">
          Email:
          <input 
            type="text"  
            name="email" 
            autoComplete="on" 
            placeholder="email" 
            onChange={handleInputChange} 
            value={userData.username}
          />
          <span>{message.username}</span>
        </label>
        <label htmlFor="password">
          Password
          <input 
            type="text"  
            name="password" 
            autoComplete="on" 
            placeholder="password" 
            onChange={handleInputChange}
            value={userData.password}
          />
          <span>{message.password}</span>
        </label>
        <button 
          disabled={disableButton}
          onClick={(event) => login(event, userData, message)}
          type="submit"
        >Login</button>
      </form>
    </Fragment>
  )
}


export { Login };