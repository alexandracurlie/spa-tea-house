import React from "react";

export const Input = ({ props }) => {
  return (
    <React.Fragment>
      <label className={"label"} htmlFor={props.name}>
        {props.name}
      </label>
      <input
        type={props.type}
        name={props.name}
        className={props.class}
        id={props.id}
        data-form={"form"}
        placeholder={props.placeholder}
        required={props.required}
        key={`input_${props.name}_${props.id}`}
      />
    </React.Fragment>
  );
};
