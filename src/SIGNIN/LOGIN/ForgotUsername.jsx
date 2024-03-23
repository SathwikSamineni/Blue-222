import React from "react";
import '../Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import InputField from "../COMPONENTS/InputField";
import Button from "../COMPONENTS/Button";
import Logo from "../COMPONENTS/Logo";

const ForgotUsername = () => {
  return (
    <div>
      <div className="container">
        <div id="login-container">
        <div className='custom' style={{ paddingTop: '25px' }}>
          <Logo />
        </div>
          <div id="login">
            <form method="POST" action="https://stagingapp.blue222.com/username/reset" acceptCharset="UTF-8" id="forgotusername">
              <p style={{ color: 'black', fontWeight: 'bold' }}>Type in the email address that you use for your Blue222 account/s, and we will email you all Usernames associated with that email address.</p>
            <InputField 
              icon={faUser} 
              type="email" 
              name="femail" 
              placeholder="Email" 
            />
              <div className="form-group">
                <div className="input-group">
                  <div id="html_element"></div>
                </div>
              </div>
              {/* <div className="form-group">
                <div id="html_element" className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-callback="verifyCaptcha"></div>
                <div id="g-recaptcha-error"></div>
              </div> */}
              <Button id="forgot_username_btn" className="btn btn-block bt-login">
                Forgot Username
              </Button>
              <div className="clearfix"></div>
              <div className="login-modal-footer">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faLock} /> 
                    <Link to="/"> Sign In </Link>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faCheck} />
                    <a href="https://stagingapp.blue222.com/createaccount"> Sign Up </a>
                  </div>
                </div>
              </div>
            </form>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default ForgotUsername;
