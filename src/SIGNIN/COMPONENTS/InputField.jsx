import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({ icon, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-addon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
