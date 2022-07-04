import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
import { Link } from "components";
const { xs, sm, md, lg } = dimentions;

const HeaderContainer = styled.article`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${prop("jc", "space-between")};
    align-items: ${ifProp("align", prop("align", "flex-start"))};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    ${marginResponsive()};
    padding: ${prop("pd", "1em")};
    padding-left: ${ifProp("pl", prop("pl", "1em"))};
    padding-right: ${ifProp("pr", prop("pr", "1em"))};
    padding-top: ${ifProp("pt", prop("pt", "1em"))};
    padding-bottom: ${ifProp("pb", prop("pb", "1em"))};

    @media (max-width: ${lg}px) {
        ${marginResponsive(lg, "lg")};
        ${paddingResponsive(lg, "lg")};
        display: ${ifProp("hide-lg", "none")};
    }

    @media (max-width: ${md}px) {
        ${marginResponsive(md, "md")};
        ${paddingResponsive(md, "md")};
        display: ${ifProp("hide-md", "none")};
    }

    @media (max-width: ${sm}px) {
        ${marginResponsive(sm, "sm")};
        ${paddingResponsive(sm, "sm")};
        display: ${ifProp("hide-sm", "none")};
    }

    @media (max-width: ${xs}px) {
        ${marginResponsive(xs, "xs")};
        ${paddingResponsive(xs, "xs")};
        display: ${ifProp("hide-xs", "none")};
    }
`;

const LogoHeader = styled.img`
    width: 80px;
    height: 20px;
`;

const Navigation = styled.nav`
    ${Link} {
        &:not(:first-child) {
            margin-left: 1em;
        }
    }
`;

export { HeaderContainer, LogoHeader, Navigation };