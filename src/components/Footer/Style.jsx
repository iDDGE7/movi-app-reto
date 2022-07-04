import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { xs, sm, md, lg } = dimentions;

const WrapperFooter = styled.footer`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${ifProp("jc", prop("jc", "space-around"))};
    align-items: ${ifProp("align", prop("align", "flex-start"))};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};
    border-radius: ${ifProp("br", prop("br", "none"))};
    border: ${ifProp("border", prop("border", "none"))};

    width: ${prop("wd", "100%")};
    z-index: ${prop("z-index", "100")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};
    overflow-x: ${ifProp("of-x", prop("of-x", "auto"))};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    position: ${ifProp("pos", prop("pos", "static"))};
    top: ${ifProp("top", prop("top", "auto"))};
    right: ${ifProp("right", prop("right", "auto"))};
    bottom: ${ifProp("bottom", prop("bottom", "auto"))};
    left: ${ifProp("left", prop("left", "auto"))};
    box-shadow: ${prop("b-shadow", "0px 0px 4px rgba(31, 48, 64, 0.1)")};

    ${marginResponsive()};
    padding: ${ifProp("pd", prop("pd", "1em"))};
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

export default WrapperFooter;
