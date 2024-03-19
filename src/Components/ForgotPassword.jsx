import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faUser, faAt, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
 import './Login.css';

const ForgotPassword = () => {
  return (
    <div className="container">
      <div id="login-container">
        <a className="text-center" href="https://stagingapp.blue222.com">
          <img alt="logo" className="img-responsive" src="./logo_new.png" style={{ paddingBottom: '3px !important' }} />
        </a>
        <div id="login">
          <form className="form-horizontal" method="POST" id="forgotpassword" action="https://stagingapp.blue222.com/password/reset">
            <input type="hidden" name="_token" value="yZKP8lTRBQshaZqI3A6bDItSScIJTmKo7ZtlFOuw" />
            <p><b>Type in your Username and Email address, and we will email you a password change link.</b></p>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon"><FontAwesomeIcon icon={faUser} /></div>
                <input type="text" className="form-control" name="username" id="fp_username" placeholder="Username" required />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon"><FontAwesomeIcon icon={faAt} /></div>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                <input type="hidden" name="recaptcha" id="recaptcha" />
              </div>
            </div>
            <button type="submit" id="forgot_password_btn" className="btn btn-block bt-login">Forgot Password</button>
            <div className="clearfix"></div>
            <div className="login-modal-footer">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8">
                <FontAwesomeIcon icon={faLock} />
                  <a href="https://stagingapp.blue222.com/username/request"> Forgot Username?</a>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                <FontAwesomeIcon icon={faCheck} />
                  <a href="https://stagingapp.blue222.com/login"> Sign In </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> 
    </div>
  );
}

export default ForgotPassword;
