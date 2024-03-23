import React, { useState } from "react";
import '../Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,  faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Instructions from "../COMPONENTS/Instructions";
import InputField from "../COMPONENTS/InputField";
import Checkbox from "../COMPONENTS/Checkbox";

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
      e.preventDefault();
      console.log({ username, password, rememberMe });
  };

  const toggleRememberMe = () => setRememberMe(!rememberMe);
    return (
      <div id="login">
      <form onSubmit={handleLogin}>
          <InputField 
            icon={faUser} 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <InputField 
            icon={faLock} 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Checkbox 
            label="Please keep my account logged in."
            value={rememberMe} 
            onChange={toggleRememberMe}
          />
              <button type="submit" className="btn btn-block bt-login">Login</button>
              <div className="clearfix"></div>
              <div className="login-modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-4">
                    <FontAwesomeIcon icon={faLock} />
                      <Link to="/ForgotPassword"> Forgot Password? </Link>
                    </div>
                    <div className="col-md-4">
                     <FontAwesomeIcon icon={faLock} />
                      <Link to="/ForgotUsername"> Forgot Username? </Link>
                    </div>
                    <div className="col-md-4">
                      <FontAwesomeIcon icon={faCheck} />
                      <Link to="https://stagingapp.blue222.com/createaccount"> Sign Up </Link>    
                    </div> 
                  </div>
                </div>
              </div>
            </form>
            <hr />
            <Instructions />
        </div>
    );
}

export default Signin;