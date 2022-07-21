import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Text,
    Form,
    Field,
    Link,
    Checkbox,
    Button,
    Image,
    Footer,
    Row,
    Column,
    Header,
    Section,
} from "components/shared";
import { setUserInfo } from "state";
import imageSignup from "assets/imageSignup.jpg";

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataField, setDataField] = useState({ email: "", password: "", phone: "", acceptedTerms: false });
    const [validatedForm, setValidateForm] = useState(false);
    const dataRegister = useSelector((state) => state.auth.dataRegister);
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (dataRegister && dataRegister.userInfo) {
            setDataField(dataRegister.userInfo);
        }
    }, [dataRegister]);

    useEffect(() => {
        const { email, password, phone, acceptedTerms } = dataField;

        if (email !== "" && password !== "" && phone !== "" && acceptedTerms) {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [dataField]);

    const getDataField = ({ name, value }) => setDataField({ ...dataField, [name]: value });

    const onSubmitForm = (e) => {
        navigate("/numberConfirmation");
        dispatch(setUserInfo(dataField));
        e.preventDefault();
    };

    return (
        <Row mn-hg="100vh">
            <Column wd="50%" wd-md="100%" pos="relative" of-y="auto">
                <Header navlinks={navLinks} mb="6em" mb-sm="3em" />
                <Section pd="0 1em 5em 1em" jc="center" align="center" customAnimation="fadeRight">
                    <Text type="h1" text-align="center" mb="16px" fs-xs="2em">
                        Crear cuenta
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
                            value={dataField.email}
                        />
                        <Field
                            type="password"
                            name="password"
                            label="Contraseña"
                            mb="30px"
                            getDataField={getDataField}
                            autoComplete="new-password"
                            value={dataField.password}
                        />
                        <Field
                            type="tel"
                            name="phone"
                            label="Celular"
                            message="Número a 10 dígitos"
                            mb="calc(60px)"
                            getDataField={getDataField}
                            value={dataField.phone}
                        />

                        <Section fd="row" mx-wd="350px" mb="2.5em">
                            <Checkbox
                                value={dataField.acceptedTerms}
                                name="acceptedTerms"
                                getDataField={getDataField}
                                mr="1em"
                            />
                            <Text fs-sm="1em" fs-xs="0.8em">
                                Acepto los{" "}
                                <Link to="#" fw="700">
                                    Términos, Condiciones y Políticas de Privacidad.
                                </Link>
                            </Text>
                        </Section>
                        <Button disabled={!validatedForm} type="submit">
                            Crear cuenta
                        </Button>
                    </Form>
                </Section>
                <Footer />
            </Column>
            <Column wd="50%" bc="primaryBlue" hide-md>
                <Image src={imageSignup} hg="100vh" mx-hg="1000px" pd="2em" />
            </Column>
        </Row>
    );
};

export default SignUp;
