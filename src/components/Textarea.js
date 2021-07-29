import React from "react";
import _ from "lodash"

export const Textarea = ({ name, id, className, placeholder, rows, onChange, required = false }) => {

    const onChangeValue = (evt) => {
        onChange(id, evt.target.value)
    }

    return (
        <React.Fragment>
            <label className={"label"} htmlFor={id}>
                {_.capitalize(name)}
            </label>
            <textarea
                name={name}
                id={id}
                className={className}
                placeholder={placeholder}
                rows={rows}
                required={required}
                onChange={(evt) => onChangeValue(evt)}
            />
        </React.Fragment>
    )
}

