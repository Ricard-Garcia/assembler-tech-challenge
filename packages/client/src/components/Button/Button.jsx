import React from "react";

export default function Button({ submitButton, children }) {
  return <button type={submitButton ? "submit" : "button"}>{children}</button>;
}
