import React from "react";
import "./InputField.scss";

const InputField = (props) => {
  return (
    <div className={`input-field ${props.className}`}>
      <input
        required
        name={props.name}
        onChange={props.onChange}
        id={props.htmlFor}
        type={props.type}
        value={props.value}
      />
      <label
        className={`label ${String(props.value).length ? "shrink" : ""} `}
        htmlFor={props.htmlFor}
      >
        {props.label}
      </label>
    </div>
  );
};

export default InputField;
