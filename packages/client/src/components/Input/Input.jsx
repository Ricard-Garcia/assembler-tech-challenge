import React from "react";

export default function Input({
  label = "Default",
  id,
  type = "text",
  value = "",
  placeholder,
  handleChange = () => {},
  handleBlur = () => {},
  handleInput = () => {},
  errorMessage,
  hasErrorMessage,
  isRequired,
  ...props
}) {
  return (
    <div className="custom-input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder && { placeholder }}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onInput={handleInput}
        required={isRequired}
        {...props}
      />
      {hasErrorMessage && errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
