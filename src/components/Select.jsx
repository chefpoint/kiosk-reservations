import React from "react";

const Select = ({ name, options, defaultValue, ...rest }) => {
  return (
    <div className="form-group">
      <select name={name} id={name} {...rest} className="form-control">
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
