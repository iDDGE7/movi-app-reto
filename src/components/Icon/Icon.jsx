import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { xs, sm, md, lg } = dimentions;

const Icon = styled.img`
    width: ${prop("wd", "24px")};
    height: ${prop("hg", "24px")};
    max-height: ${ifProp("mx-hg", prop("mx-hg", "initial"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "332px"))};
    object-position: ${prop("op", "center center")};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};
    object-fit: ${prop("o-fit", "contain")};
    border-radius: ${ifProp("br", prop("br", "10px"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    top: ${ifProp("top", prop("top", "auto"))};
    right: ${ifProp("right", prop("right", "auto"))};
    bottom: ${ifProp("bottom", prop("bottom", "auto"))};
    left: ${ifProp("left", prop("left", "auto"))};
    overflow: ${ifProp("of", prop("of", "auto"))};

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

export default Icon;
