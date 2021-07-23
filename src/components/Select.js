import React from "react";

export const Select = ({ props }) => {
  return (
    <React.Fragment>
      <label className={"label"} htmlFor={props.name}>
        {props.name}
      </label>
      <select
        name={props.name}
        className={props.class}
        id={props.id}
        data-form={"form"}
        default={props.default}
      >
        {props.options.map((item, index) => (
          <option value={item.value} key={`${item.name}_${index}`}>
            {item.text}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};
