import React from "react";
import { HeaderContainer, LogoHeader, Navigation } from "./Style";
import { Row, Link } from "components/shared";
import lightLogo from "assets/lightLogo.svg";
import darkLogo from "assets/darkLogo.svg";

const Header = ({ theme = "light", navlinks, ...props }) => {
    return (
        <HeaderContainer pd="1em" {...props}>
            <Row wd="100%" mx-wd="1920px" jc="space-between">
                <LogoHeader src={theme === "dark" ? lightLogo : darkLogo} />
                {navlinks && (
                    <Navigation>
                        {navlinks.length > 0 &&
                            navlinks.map(({ path, label }, index) => (
                                <Link
                                    to={path}
                                    key={index}
                                    color={theme === "dark" ? "neutralWhite" : "primaryBlue"}
                                    fw="700"
                                >
                                    {label}
                                </Link>
                            ))}
                    </Navigation>
                )}
            </Row>
        </HeaderContainer>
    );
};

export default Header;
