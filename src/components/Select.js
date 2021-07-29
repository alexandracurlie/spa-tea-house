import React from "react";
import _ from "lodash"
export const Select = ({ name, id, className, defaultValue, options, onChange }) => {

    const onChangeValue = (evt) => {
        onChange(id, evt.target.value)
    }

    return (
        <React.Fragment>
            <label className={"label"} htmlFor={id}>
                {_.capitalize(name)}
            </label>
            <select
            name={name}
            id={id}
            className={className}
            defaultValue={defaultValue}
            onChange={(evt) => onChangeValue(evt)}
            >
                {options.map((item, index) => (
                    <option value={item} key={`option_order_form_${index}`}>
                        {item}
                    </option>
                ))}
            </select>
        </React.Fragment>
    )
}


