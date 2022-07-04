import React from "react";
import { Text } from "components";
import WrapperFooter from "./Style";

const Footer = ({ theme = "light", ...props }) => {
    return (
        <WrapperFooter bc={theme === "light" ? "neutralWhite" : "primaryBlue"}  pos="absolute" bottom="0"  jc="center" pd="1em" {...props}>
            <Text color={theme === "light" ? "greysDark" : "neutralWhite"} fw="400" fs="16px">Auto nuevo, corazón contento.</Text>
        </WrapperFooter>
    );
};

export default Footer;
