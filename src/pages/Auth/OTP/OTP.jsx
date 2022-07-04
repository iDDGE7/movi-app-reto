import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Title, Link, Button, OtpField, Footer } from "components";
import { Row, Column, Header } from "layouts";

const OTP = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];
    const [dataField, setDataField] = useState({ otpCode: "" });
    const [validatedForm, setValidatedForm] = useState(true);

    const getDataField = ({ name, value }) => {
        setDataField({ ...dataField, [name]: value });
    };

    const filledOtpCode = (filled) => setValidatedForm(filled);


    return (
        <Row mn-hg="100vh">
            <Column wd="100%" pos="relative">
                <Header navlinks={navLinks} mb="5em" mb-sm="3em"></Header>
                <Title text-align="center" mb="2em" mx-wd="587px">
                    Para crear tu cuenta, ingresa el código que te mandamos al:
                </Title>
                <Text color="darkGrey" text-align="center" mx-wd="360px" mb="1em">
                    5516435155
                </Text>

                <Link to="#" mb="3em" fw="700">
                    Cambiar número
                </Link>

                <OtpField name="otpCode" getDataField={getDataField} mb="2em" filled={filledOtpCode} />

                <Link to="#" mb="3em" fw="700">
                    Reenviar código
                </Link>

                <Button disabled={!validatedForm} onClick={() => navigate("/welcome")}>
                    Crear cuenta
                </Button>

                <Footer />
            </Column>
        </Row>
    );
};

export default OTP;
