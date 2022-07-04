import React from "react";
import { HeaderContainer, LogoHeader, Navigation } from "./Style";
import { Link } from "components";
import lightLogo from "assets/lightLogo.svg";
import darkLogo from "assets/darkLogo.svg";

const Header = ({ theme = "light", navlinks, ...props }) => {
    return (
        <HeaderContainer {...props}>
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
        </HeaderContainer>
    );
};

export default Header;
