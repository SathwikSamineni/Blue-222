import React from "react";
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

const ForgotUsername = () => {
  return (
    <div>
      <div className="container">
        <div id="login-container">
          <a className="text-center" href="https://stagingapp.blue222.com">
            <img alt="logo" className="img-responsive" src="./logo_new.png" style={{ paddingBottom: '5px !important' }} />
          </a>
          <div id="login">
            <form method="POST" action="https://stagingapp.blue222.com/username/reset" acceptCharset="UTF-8" id="forgotusername">
              <input name="_token" type="hidden" value="yZKP8lTRBQshaZqI3A6bDItSScIJTmKo7ZtlFOuw" />
              <p style= {{ fontColor: 'black', fontWeight: 'bold' }}>Type in the email address that you use for your Blue222 account/s, and we will email you all Usernames associated with that email address.</p>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon">
                    <FontAwesomeIcon icon={faUser} /> {/* For FontAwesomeIcon usage */}
                  </div>
                  <input type="email" className="form-control" name="femail" id="femail" placeholder="Email" required />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div id="html_element"></div>
                </div>
              </div>
              <div className="form-group">
                <div id="html_element" className="g-recaptcha" data-sitekey="YOUR_SITE_KEY" data-callback="verifyCaptcha"></div>
                <div id="g-recaptcha-error"></div>
              </div>
              <button type="submit" id="forgot_username_btn" className="btn btn-block bt-login">Forgot Username</button>
              <div className="clearfix"></div>
              <div className="login-modal-footer">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <FontAwesomeIcon icon={faLock} /> 
                    <a href="https://stagingapp.blue222.com/login"> Sign In </a>
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
