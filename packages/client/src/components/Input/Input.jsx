import React from "react";

export default function Input({ label = "Default", id, type = "text" }) {
  return (
    <div className="custom-input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} required />
    </div>
  );
}
