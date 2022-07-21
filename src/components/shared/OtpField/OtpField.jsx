import { useEffect, useState } from "react";
import { WrapperOtpField, Input } from "./Style";

const OtpField = ({ name, autoComplete = "off", getDataField, filled, ...props }) => {
    const [value, setValue] = useState({
        digit1: "",
        digit2: "",
        digit3: "",
        digit4: "",
    });

    useEffect(() => {
        getDataField({ name, value });
        if (value.digit1 !== "" && value.digit2 !== "" && value.digit3 !== "" && value.digit4 !== "") {
            filled(true);
        } else {
            filled(false);
        }
        // eslint-disable-next-line
    }, [value]);

    const onChangeValue = (e) => {
        const val = e.target.value.replace(/\D/g, "");
        setValue({ ...value, [e.target.name]: val });
    };

    const onKeyUp = (e) => {
        if (e.key.toLowerCase() === "backspace") {
            const form = e.target.form;
            const index = [...form].indexOf(e.target);
            const element = form.elements[index - 1];
            if (element) {
                element.focus();
            }
            e.preventDefault();
            return;
        }

        if (e.target.value !== "") {
            const form = e.target.form;
            const index = [...form].indexOf(e.target);
            const element = form.elements[index + 1];
            if (element) {
                element.focus();
            }
        }
    };

    return (
        <WrapperOtpField {...props}>
            <Input
                type="tel"
                maxLength={1}
                value={value.digit1}
                placeholder="0"
                name="digit1"
                autoComplete="off"
                onChange={onChangeValue}
                onKeyUp={onKeyUp}
            />
            <Input
                type="tel"
                maxLength={1}
                value={value.digit2}
                placeholder="0"
                name="digit2"
                autoComplete="off"
                onChange={onChangeValue}
                onKeyUp={onKeyUp}
            />
            <Input
                type="tel"
                maxLength={1}
                value={value.digit3}
                placeholder="0"
                name="digit3"
                autoComplete="off"
                onChange={onChangeValue}
                onKeyUp={onKeyUp}
            />
            <Input
                type="tel"
                maxLength={1}
                value={value.digit4}
                placeholder="0"
                name="digit4"
                autoComplete="off"
                onChange={onChangeValue}
                onKeyUp={onKeyUp}
            />
        </WrapperOtpField>
    );
};

export default OtpField;
