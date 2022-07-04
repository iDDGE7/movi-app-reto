import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Title, Form, Field, Link, Checkbox, Button, Image, Footer } from "components";
import { Row, Column, Header, Section } from "layouts";
import imageSignup from "assets/imageSignup.jpg";

const SignUp = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];
    const [dataField, setDataField] = useState({ email: "", password: "", phone: "", acceptedTerms: false });
    const [validatedForm, setValidateForm] = useState(false);

    const getDataField = ({ name, value }) => {
        setDataField({ ...dataField, [name]: value });
    };

    useEffect(() => {
        const { email, password, phone, acceptedTerms } = dataField;

        if (email !== "" && password !== "" && phone !== "" && acceptedTerms) {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [dataField]);

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    return (
        <Row mn-hg="100vh">
            <Column wd="50%" wd-md="100%" pos="relative">
                <Header navlinks={navLinks} mb="5em" mb-sm="3em"></Header>
                <Title text-align="center" mb="16px">
                    Crear cuenta
                </Title>
                <Text text-align="center" mx-wd="360px" mb="40px">
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
                    <Field
                        type="tel"
                        name="phone"
                        label="Celular"
                        message="Número a 10 dígitos"
                        mb="calc(60px)"
                        getDataField={getDataField}
                    />
                </Form>
                <Section fd="row" mx-wd="350px" mb="2.5em">
                    <Checkbox mr="1em" name="acceptedTerms" getDataField={getDataField} />
                    <Text fs="16px">
                        Acepto los{" "}
                        <Link to="#" fw="700">
                            Términos, Condiciones y Políticas de Privacidad.
                        </Link>
                    </Text>
                </Section>

                <Button mb="5em" disabled={!validatedForm} onClick={() => navigate("/numberConfirmation")}>
                    Crear cuenta
                </Button>
                <Footer />
            </Column>
            <Column wd="50%" pd="initial" bc="primaryBlue" hide-md>
                <Image src={imageSignup} hg="100vh" mx-hg="1000px" pd="2em" />
            </Column>
        </Row>
    );
};

export default SignUp;
