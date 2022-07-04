import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Title, Button, InputFile, Footer } from "components";
import { Row, Column, Header, List } from "layouts";

const Validation = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/help", label: "¿Necesitas ayuda?" }];
    const [dataField, setDataField] = useState({ imageIneFrontal: "", imageIneReverso: "", imageSelfie: "" });
    const [validateForm, setValidateForm] = useState(false);

    useEffect(() => {
        const { imageIneFrontal, imageIneReverso, imageSelfie } = dataField;
        if (imageIneFrontal !== "" && imageIneReverso !== "" && imageSelfie !== "") {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [dataField]);

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    const getDataField = ({ name, value }) => {
        setDataField({ ...dataField, [name]: value });
    };

    return (
        <Row mn-hg="100vh" hg="100%" pos="relative" pd="initial" of-x="hidden">
            <Column wd="100%">
                <Header navlinks={navLinks} mb="5em" mb-sm="3em"></Header>
                <Title text-align="center" mb="0.2em" mx-wd="587px" fw="600">
                    Validemos tu identidad
                </Title>
                <Text text-align="center" mx-wd="360px" mb="2em" fw="600" fs="18px">
                    Sube tu INE y tómate una foto
                </Text>

                <List mx-wd="371px" mb="2em">
                    <InputFile
                        type="image"
                        name="imageIneFrontal"
                        label="Sube el frente de tu INE"
                        getDataField={getDataField}
                    />
                    <InputFile
                        type="image"
                        name="imageIneReverso"
                        label="Sube el reverso de tu INE"
                        getDataField={getDataField}
                    />
                    <InputFile
                        type="camera"
                        name="imageSelfie"
                        label="Tómate una foto de frente"
                        getDataField={getDataField}
                    />
                </List>

                <Button mb="5em" disabled={!validateForm} onClick={() => navigate("#")}>
                    Crear cuenta
                </Button>

                <Footer />
            </Column>
        </Row>
    );
};

export default Validation;
