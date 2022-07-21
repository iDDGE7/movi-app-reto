import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Text, Button, InputFile, Footer, Row, Column, Header, List, Section } from "components/shared";
import { setUserImage } from "state";
const Validation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navLinks = [{ path: "/help", label: "¿Necesitas ayuda?" }];
    const [dataField, setDataField] = useState({ imageIneFrontal: "", imageIneReverso: "", imageSelfie: "" });
    const [validateForm, setValidateForm] = useState(false);
    const dataRegister = useSelector((state) => state.auth.dataRegister);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (dataRegister && dataRegister.userImages) {
            setDataField(dataRegister.userImages);
        }
    }, [dataRegister]);

    useEffect(() => {
        const { imageIneFrontal, imageIneReverso, imageSelfie } = dataField;
        if (imageIneFrontal !== "" && imageIneReverso !== "" && imageSelfie !== "") {
            setValidateForm(true);
        } else {
            setValidateForm(false);
        }
    }, [dataField]);

    const getDataField = ({ name, value }) => {
        dispatch(setUserImage({ [name]: value }));
        setDataField({ ...dataField, [name]: value });
    };

    return (
        <Row mn-hg="100vh" hg="100%" pos="relative" pd="initial" of-x="hidden">
            <Column wd="100%">
                <Header navlinks={navLinks} mb="8em" mb-sm="3em"></Header>

                <Section pd="0 1em 5em 1em" jc="center" align="center" customAnimation="fadeRight">
                    <Text
                        type="h1"
                        text-align="center"
                        mb="0.5em"
                        mx-wd="587px"
                        fw="600"
                        fs-md="1.9em"
                        fs-sm="1.7em"
                        fs-xs="1.4em"
                    >
                        Validemos tu identidad
                    </Text>
                    <Text text-align="center" mx-wd="360px" mb="2em" fw="600" fs-sm="1em">
                        Sube tu INE y tómate una foto
                    </Text>

                    <List mx-wd="371px" mb="1em">
                        <InputFile
                            type="image"
                            name="imageIneFrontal"
                            label="Sube el frente de tu INE"
                            getDataField={getDataField}
                            value={dataField.imageIneFrontal}
                        />
                        <InputFile
                            type="image"
                            name="imageIneReverso"
                            label="Sube el reverso de tu INE"
                            getDataField={getDataField}
                            value={dataField.imageIneReverso}
                        />
                        <InputFile
                            type="camera"
                            name="imageSelfie"
                            label="Tómate una foto de frente"
                            getDataField={getDataField}
                            value={dataField.imageSelfie}
                        />
                    </List>

                    <Button wd="90%" mb="5em" mx-wd-sm="280px" disabled={!validateForm} onClick={() => navigate("#")}>
                        Crear cuenta
                    </Button>
                </Section>

                <Footer />
            </Column>
        </Row>
    );
};

export default Validation;
