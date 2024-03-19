import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotUsername from './Components/ForgotUsername';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';


function App() {
  return (
    <div>
    <Login />
    <ForgotUsername />
    <ForgotPassword />
    </div>
  );
}

export default App;
