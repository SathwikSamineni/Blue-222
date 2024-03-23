import React from 'react';
import '../Login.css';
import Signin from './signin';
import Logo from '../COMPONENTS/Logo';

const Login = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-md-offset-2" style={{ textAlign: 'center', paddingTop: '25px' }}>
          <Logo />
          <Signin />
        </div>
      </div>
    </div>

  );
};

export default Login;
