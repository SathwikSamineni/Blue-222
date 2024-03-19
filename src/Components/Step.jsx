import React, { useState } from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,  faUser, faCheck } from '@fortawesome/free-solid-svg-icons';

const Step = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
      };
    return (
        <div id="login">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon"><FontAwesomeIcon icon={faUser} /></div>
                  <input type="text" className="form-control" id="username" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon"><FontAwesomeIcon icon={faLock} /></div>
                  <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>
              <div className="form-check" style={{ float: 'left' }}>
                <input type="checkbox" className="custom-control-input" name ="rememberme" value="false" id="rememberme" />
                <label className="form-check-label" for="rememberme" style={{ fontWeight: 'normal', fontSize: '14px', lineHeight: '1.42857143', color: '#333' }}>
                  Please keep my account logged in.
                </label>
              </div>
              <button type="submit" className="btn btn-block bt-login">Login</button>
              <div className="clearfix"></div>
              <div className="login-modal-footer">
                <div className="row">
                  <div className="col-md-12">
                    <div className="col-md-4">
                    <FontAwesomeIcon icon={faLock} />
                    <i className=" fa-lock"></i>

                      <a href="https://stagingapp.blue222.com/password/request"> Forgot password? </a>
                    </div>
                    <div className="col-md-4">
                     <FontAwesomeIcon icon={faLock} />
                     <i className=" fa-lock"></i>
                      <a href="https://stagingapp.blue222.com/username/request"> Forgot Username? </a>
                    </div>
                    <div className="col-md-4">
                      <FontAwesomeIcon icon={faCheck} />
                      <i className="   fa-check"></i>

                      <a href="https://stagingapp.blue222.com/createaccount"> Sign Up </a>    
                    </div> 
                  </div>
                </div>
              </div>
            </form>
            <hr />
            <p className="text-center">"We no longer support sign in with LinkedIn."
            <a href="https://stagingapp.blue222.com/login#" data-toggle="modal" data-target="#linkedinSigninRemoveInstructionModal">Click here</a> "for more info."</p>
        </div>
    );
}

export default Step;