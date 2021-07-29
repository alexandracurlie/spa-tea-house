import React from "react";
import _ from "lodash"

export const Input = ({ type, name, id, className, placeholder, required = false, onChange }) => {

    const onChangeValue = (evt) => {
        onChange(id, evt.target.value)
    }

    return (
        <React.Fragment>
            <label className={"label"} htmlFor={id}>{_.capitalize(name)}</label>
            <input
                type={type}
                name={name}
                id={id}
                className={className}
                placeholder={placeholder}
                required={required}
                onChange={(evt) => onChangeValue(evt)}
            />
        </React.Fragment>
    )
}
