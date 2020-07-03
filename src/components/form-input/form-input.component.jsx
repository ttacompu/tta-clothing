import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...others }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...others} />
    {label ? (
      <label
        className={`${others.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
