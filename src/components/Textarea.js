import React from "react";

export const Textarea = ({ props }) => {
  return (
    <React.Fragment>
      <label className={"label"} htmlFor={props.id}>
        {props.name}
      </label>
      <textarea
        name={props.name}
        className={props.class}
        id={props.id}
        data-form={"form"}
        placeholder={props.placeholder}
        key={`textarea_${props.name}_${props.id}`}
      />
    </React.Fragment>
  );
};
