import React, {  useState } from "react";
import { WrapperCheckbox, InputCheckbox, IconChecked } from "./Style";

const Checkbox = ({ name, getDataField, ...props }) => {
    const [value, setValue] = useState(false);

    const toggleValueCheckbox = () => {
        setValue(!value);
        getDataField({ name, value: !value });
    };

    return (
        <WrapperCheckbox {...props}>
            <IconChecked htmlFor={name} value={value}/>
            <InputCheckbox type="checkbox" id={name} name={name} value={value} onChange={toggleValueCheckbox} />
        </WrapperCheckbox>
    );
};

export default Checkbox;
