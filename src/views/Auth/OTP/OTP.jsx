import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Text, Link, Button, OtpField, Footer, Row, Column, Header, Section } from "components/shared";

const OTP = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];
    const [dataField, setDataField] = useState({ otpCode: "" });
    const [validatedForm, setValidatedForm] = useState(true);
    const dataRegister = useSelector((state) => state.auth.dataRegister);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const getDataField = ({ name, value }) => {
        setDataField({ ...dataField, [name]: value });
    };

    const filledOtpCode = (filled) => setValidatedForm(filled);

    return (
        <Row mn-hg="100vh">
            <Column wd="100%" pos="relative">
                <Header navlinks={navLinks} mb="10em" mb-md="3em" />
                <Section pd="0 1em 5em 1em" jc="center" align="center" customAnimation="fadeRight">
                    <Text
                        type="h1"
                        text-align="center"
                        mx-wd="587px"
                        mb="2em"
                        fs-md="1.7em"
                        fs-sm="1.4em"
                        fs-xs="1.2em"
                    >
                        Para crear tu cuenta, ingresa el código que te mandamos al:
                    </Text>

                    {dataRegister && dataRegister.userInfo && dataRegister.userInfo.phone && (
                        <Text color="darkGrey" text-align="center" mb="1.4em">
                            {dataRegister.userInfo.phone}
                        </Text>
                    )}

                    <Link to="#" color="primaryGrey" mb="3em" fw="700">
                        Cambiar número
                    </Link>

                    <OtpField name="otpCode" getDataField={getDataField} mb="2em" filled={filledOtpCode} />

                    <Link to="#" color="primaryGrey" mb="3em" fw="700">
                        Reenviar código
                    </Link>

                    <Button mb="5em" disabled={!validatedForm} onClick={() => navigate("/welcome")}>
                        Continuar
                    </Button>
                </Section>

                <Footer />
            </Column>
        </Row>
    );
};

export default OTP;
