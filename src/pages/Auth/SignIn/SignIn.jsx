import React, { useState } from "react";
import { Text, Title, Form, Field, Button, Image, Footer } from "components";
import { Row, Column, Header } from "layouts";
import imageSignup from "assets/imageSignup.jpg";

const SignIn = () => {
    const navLinks = [{ path: "/", label: "Registrarse" }];
    const [dataField, setDataField] = useState({ email: "", password: "", phone: "", acceptedTerms: false });

    const getDataField = ({ name, value }) => {
        setDataField({ ...dataField, [name]: value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    return (
        <Row mn-hg="100vh">
            <Column wd="50%" wd-md="100%" pd="1em" pos="relative">
                <Header navlinks={navLinks} mb="5em" mb-sm="3em"></Header>
                <Title text-align="center" mb="16px">
                    Iniciar sesión
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
                </Form>

                <Button mb="5em">Ingresar</Button>
                <Footer />
            </Column>
            <Column wd="50%" pd="initial" bc="primaryBlue" hide-md>
                <Image src={imageSignup} hg="100vh" mx-hg="1000px" pd="2em" />
            </Column>
        </Row>
    );
};

export default SignIn;
