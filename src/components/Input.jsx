/* * */
/* * */
/* * * * * */
/* INPUT FIELD */
/* * */

import React from "react";

const Input = ({
  name,
  placeholder,
  type,
  autoComplete,
  onChange,
  value,
  error,
  ...rest
}) => {
  return (
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      onChange={onChange}
      value={value}
      error={error}
      className={"text-lg form-control " + name}
      {...rest}
    />
  );
};

export default Input;
