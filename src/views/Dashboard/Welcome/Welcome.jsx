import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Link, Button, ItemList, Image, Footer, Row, Column, Header, List, Section } from "components/shared";
import personIcon from "assets/personIcon.svg";
import cardIcon from "assets/cardIcon.svg";
import walletIcon from "assets/walletIcon.svg";
import dotsPattern from "assets/dotsPattern.svg";

const Welcome = () => {
    const navigate = useNavigate();
    const navLinks = [{ path: "/login", label: "Iniciar sesión" }];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

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
                hide-md
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
                <Header navlinks={navLinks} theme="dark" mb="7em" mb-sm="3em" />
                <Section pd="0 1em 5em 1em" jc="center" align="center"  customAnimation="fadeRight">
                    <Text
                        type="h1"
                        color="neutralWhite"
                        text-align="center"
                        mb="0.6em"
                        mb-sm="1em"
                        mx-wd="587px"
                        fs-sm="1.9em"
                        fs-xs="1.5em"
                    >
                        ¡Bienvenido a Movi!
                    </Text>

                    <Text
                        color="neutralWhite"
                        text-align="center"
                        mx-wd="360px"
                        mb="3em"
                        fw="600"
                        fs-sm="1em"
                        fs-xs="0.9em"
                    >
                        Estás a tres sencillos pasos de estrenar el auto de tus sueños:
                    </Text>

                    <List mx-wd="320px" wd="initial" mb="2em">
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
                </Section>
                <Footer theme="dark" />
            </Column>
        </Row>
    );
};

export default Welcome;
