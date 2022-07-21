import { useState } from "react";
import { WrapperField, Input, Label, ShowPasswordButton, InputMessage } from "./Style";

const Field = ({
    type = "text",
    autoComplete = "off",
    value,
    label,
    name,
    getDataField,
    setDataField,
    message,
    autoFocus,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const onChangeValue = (e) => {
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

            {type === "password" && (
                <ShowPasswordButton onClick={() => setShowPassword(!showPassword)} showPassword={showPassword} />
            )}
        </WrapperField>
    );
};

export default Field;
