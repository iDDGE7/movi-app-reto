import styled from "styled-components";
import { NavLink  } from "react-router-dom";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { xs, sm, md, lg } = dimentions;

const _Link = styled(NavLink)`
    color: ${switchProp(prop("color", "primaryBlue"), colors, prop("color", "primaryBlue"))};

    font-size: ${prop("fs", "1em")};
    font-weight: ${prop("fw", "500")};
    text-align: ${prop("text-align", "left")};
    line-height: ${prop("ln-hg", "initial")};
    text-transform: ${prop("txt-tf", "initial")};
    white-space: ${ifProp("white-sp", prop("white-sp", "normal"))};
    word-break: ${ifProp("word-bk", prop("word-bk", "initial"))};
    text-overflow: ${ifProp("text-of", prop("text-of", "clip"))};
    letter-spacing: ${ifProp("letter-sp", prop("letter-sp", "normal"))};
    text-transform: ${ifProp("text-tf", prop("text-tf", "normal"))};

    display: ${ifProp("dp", prop("dp", "block"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    width: ${ifProp("wd", prop("wd", "initial"))};
    height: ${ifProp("hg", prop("hg", "initial"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    ${marginResponsive()};
    ${paddingResponsive()};

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

export default _Link;
