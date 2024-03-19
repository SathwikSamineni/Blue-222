import React from 'react';
import './Login.css';
import Step from './Step';

const Login = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-md-offset-2" style={{ textAlign: 'center' }}>
          <a href="https://stagingapp.blue222.com">
            <img alt="logo" src="./logo_new.png" style={{ paddingBottom: '5px' }} className="img-responsive" />
          </a>
          <Step />
        </div>
      </div>
    </div>

  );
};

export default Login;
