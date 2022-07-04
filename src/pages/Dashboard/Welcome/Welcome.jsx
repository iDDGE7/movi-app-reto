import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Title, Link, Button, ItemList, Image, Footer } from "components";
import { Row, Column, Header, List } from "layouts";
import personIcon from "assets/personIcon.svg";
import cardIcon from "assets/cardIcon.svg";
import walletIcon from "assets/walletIcon.svg";
import dotsPattern from "assets/dotsPattern.svg";

const Welcome = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];

    const onSubmitForm = (e) => {
        e.preventDefault();
    };

    return (
        <Row bc="primaryBlue" mn-hg="100vh" pos="relative" pd="initial" of-x="hidden">
            <Image
                src={dotsPattern}
                pos="absolute"
                wd="152px"
                hg="152px"
                right="-50px"
                top="5em"
                o-fit="unset"
                hide-sm
            />
            <Image
                src={dotsPattern}
                pos="absolute"
                wd="214px"
                hg="214px"
                wd-sm="150px"
                hg-sm="150px"
                left="-70px"
                bottom="5em"
                o-fit="initial"
            />
            <Column wd="100%">
                <Header navlinks={navLinks} theme="dark" mb="5em" mb-sm="3em"></Header>
                <Title color="neutralWhite" text-align="center" mb="0.5em" mx-wd="587px">
                    ¡Bienvenido a Movi!
                </Title>
                <Text color="neutralWhite" text-align="center" mx-wd="360px" mb="2em" fw="600" fs="18px">
                    Estás a tres sencillos pasos de estrenar el auto de tus sueños:
                </Text>

                <List mx-wd="310px" mb="2em">
                    <ItemList icon={personIcon}>Validaremos tu identidad</ItemList>
                    <ItemList icon={cardIcon}>Consultaremos tu buró de crédito</ItemList>
                    <ItemList icon={walletIcon}>Comprobaremos tus ingresos</ItemList>
                </List>

                <Button theme="dark" mb="3em" onClick={() => navigate("/validation")}>
                    Continuar
                </Button>
                <Link to="#" color="neutralWhite" fw="700" mb="5em">
                    En otro momento
                </Link>
            </Column>

            <Footer theme="dark"/>
        </Row>
    );
};

export default Welcome;
