import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="https://stagingapp.blue222.com" className="text-center">
      <img alt="logo" className="img-responsive" src="./logo_new.png" style={{ paddingBottom: '5px' }} />
    </Link>
  );
};

export default Logo;
