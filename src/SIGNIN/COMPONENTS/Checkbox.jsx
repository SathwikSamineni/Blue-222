import React from 'react';

const Checkbox = ({ label, value, onChange }) => {
    return (
      <div className="form-check" style={{ float: 'left' }}>
        <input 
          type="checkbox" 
          className="custom-control-input" 
          name="rememberme" 
          id="rememberme" 
          checked={value} 
          onChange={onChange} 
        />
        <label className="form-check-label" htmlFor="rememberme" style={{ fontWeight: 'normal', fontSize: '14px', lineHeight: '1.42857143', color: '#333' }}>
          {label}
        </label>
      </div>
    );
  };

export default Checkbox;
  