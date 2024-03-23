import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotUsername from './SIGNIN/LOGIN/ForgotUsername';
import ForgotPassword from './SIGNIN/LOGIN/ForgotPassword';
import Login from './SIGNIN/LOGIN/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ForgotUsername" element={<ForgotUsername />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
