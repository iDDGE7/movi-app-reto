import { useEffect, useState } from "react";
import { WrapperField, Input, Label, ClearButton, ShowPasswordButton, InputMessage } from "./Style";

const Field = ({ type = "text", label, name, autoComplete = "off", getDataField, message, autoFocus, ...props }) => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const onChangeValue = (e) => {
        setValue(e.target.value);
        getDataField({ name, value: e.target.value });
    };

    return (
        <WrapperField message={message} {...props}>
            <Input
                type={showPassword ? "text" : type}
                value={value}
                placeholder={label}
                name={name}
                id={name}
                autoComplete={autoComplete}
                onChange={onChangeValue}
                autoFocus={autoFocus}
                role="presentation"
            />
            <Label htmlFor={name} value={value}>
                {label}
            </Label>

            {message && <InputMessage>{message}</InputMessage>}

            {/* {value !== "" && <ClearButton onClick={() => setValue("")} />} */}

            {type === "password" && (
                <ShowPasswordButton onClick={() => setShowPassword(!showPassword)} showPassword={showPassword} />
            )}
        </WrapperField>
    );
};

export default Field;
