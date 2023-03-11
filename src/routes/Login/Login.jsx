import { validateUsername, validatePassword } from "../../assets/validation";
import './Login.scss'
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Rick } from '../../components/Icons/Rick'


function Login() {
  const [ userData, setUserData ] = useState({ username: "", password: "" });
  const [ message, setMessage ] = useState({ username: "", password: "" });
  const [ stylesUsername, setStylesUsername ] = useState('normal');
  const [ stylesPassword, setStylesPassword ] = useState('normal');

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
    if(message.username != '') {
      if(message.username != true) {
        setStylesUsername('error')
      } else {
        setStylesUsername('validated')
      }
    }
    
    
    if(message.password != ''){
      if(message.password != true) {
        setStylesPassword('error')
      } else {
        setStylesPassword('validated')
      }
    }
  }, [message])

  useEffect(() => {
    if(message.password == true && message.username == true){
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [message])


  return(
    <section className="LoginUI">
      <div className="LoginUI__container">
        <div>
          <Rick />
        </div>
        <h3>Login with your account</h3>
        <form action="">
          <div>
            <label htmlFor="email">Username</label>
            <input
              className={stylesUsername}
              type="text"
              name="email"
              autoComplete="on"
              placeholder="email"
              onChange={handleInputChange}
              value={userData.username}
            />
            <span>{message.username}</span>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              className={stylesPassword}
              type="text"
              name="password"
              autoComplete="on"
              placeholder="password"
              onChange={handleInputChange}
              value={userData.password}
            />
            <span>{message.password}</span>
          </div>

          <button
            disabled={disableButton}
            onClick={(event) => login(event, userData, message)}
            type="submit"
          >Login</button>
        </form>
      </div>
    </section>
  )
}


export { Login };