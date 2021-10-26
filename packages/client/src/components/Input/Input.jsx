import React from "react";

import "./Input.scss";

export default function Input({
  label = "Default",
  id,
  type = "text",
  classNames = "",
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
  const inputClasses = `${classNames} custom-input-wrapper d-flex flex-column`;

  return (
    <div className={inputClasses}>
      <label
        className="fnt-light fnt-bold fnt-label truncate mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="custom-input p-3 fx-border-radius"
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
      {hasErrorMessage && errorMessage ? (
        <p className="error-message fnt-text mt-2">{errorMessage}</p>
      ) : (
        <p className="error-message fnt-text mt-2">&nbsp;</p>
      )}
    </div>
  );
}
