import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Form, Field, Button, Image, Footer, Row, Column, Header, Section } from "components/shared";
import imageSignup from "assets/imageSignup.jpg";

const SignIn = () => {
    const navigate = useNavigate();
    const [dataField, setDataField] = useState({ email: "", password: "", phone: "", acceptedTerms: false });
    const [validatedForm, setValidateForm] = useState(false);
    const navLinks = [{ path: "/", label: "Registrarse" }];

    useEffect(() => {
        const { email, password } = dataField;

        if (email !== "" && password !== "") {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [dataField]);

    const getDataField = ({ name, value }) => setDataField({ ...dataField, [name]: value });

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    return (
        <Row mn-hg="100vh">
            <Column wd="50%" wd-md="100%" pos="relative" of-y="auto">
                <Header navlinks={navLinks} mb="6em" mb-sm="3em" />
                <Section pd="0 1em 5em 1em" jc="center" align="center" customAnimation="fadeRight">
                    <Text type="h1" text-align="center" mb="16px" fs-xs="2em">
                        Iniciar sesión
                    </Text>
                    <Text text-align="center" mx-wd="360px" mb="40px" fs-sm="1em" fs-xs="0.8em">
                        Te damos la bienvenida a la forma más fácil y accesible de estrenar un auto
                    </Text>
                    <Form onSubmit={onSubmitForm}>
                        <Field
                            type="email"
                            name="email"
                            label="Correo electrónico"
                            autoFocus
                            mb="30px"
                            getDataField={getDataField}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Contraseña"
                            mb="30px"
                            getDataField={getDataField}
                            autoComplete="new-password"
                        />
                    </Form>
                    <Button disabled={!validatedForm} onClick={() => navigate("/numberConfirmation")}>
                        Ingresar
                    </Button>
                </Section>
                <Footer />
            </Column>
            <Column wd="50%" bc="primaryBlue" hide-md>
                <Image src={imageSignup} hg="100vh" mx-hg="1000px" pd="2em" />
            </Column>
        </Row>
    );
};

export default SignIn;
