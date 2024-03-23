import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faCheck, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Login.css';
import InputField from '../COMPONENTS/InputField';
import Button from '../COMPONENTS/Button';
import Logo from '../COMPONENTS/Logo';

const ForgotPassword = () => {
  return (
    <div className="container">
      <div id="login-container">
      <div className='custom' style={{ paddingTop: '25px' }}>
        <Logo />
        </div>
        <div id="login">
          <form className="form-horizontal" method="POST" id="forgotpassword" action="https://stagingapp.blue222.com/password/reset">
            <p style={{ color: 'black', fontWeight: 'bold' }}>Type in your Username and Email address, and we will email you a password change link.</p>
            <InputField 
            icon={faUser} 
            type="text" 
            name="username" 
            placeholder="Username" 
          />
          <InputField 
            icon={faAt} 
            type="email" 
            name="email" 
            placeholder="Email" 
          />
          <Button id="forgot_password_btn" className="btn btn-block bt-login">
            Forgot Password
          </Button>
            <div className="clearfix"></div>
            <div className="login-modal-footer">
              <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8">
                <FontAwesomeIcon icon={faLock} />
                <Link to="/ForgotUsername"> Forgot Username? </Link>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4">
                <FontAwesomeIcon icon={faCheck} />
                  <Link to="/"> Sign In </Link>
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
