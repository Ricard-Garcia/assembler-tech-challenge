import React from "react";

export default function Button({ submitButton, children }) {
  return (
    <button className="btn btn-dark" type={submitButton ? "submit" : "button"}>
      {children}
    </button>
  );
}
