import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";

const { xs, sm, md, lg } = dimentions;

const Column = styled.div`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "column")};
    justify-content: ${prop("jc", "flex-start")};
    align-items: ${prop("align", "center")};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${ifProp("wd", prop("wd", "initial"))};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    ${marginResponsive()};
    ${paddingResponsive()};

    @media (max-width: ${lg}px) {
        ${marginResponsive(lg, "lg")};
        ${paddingResponsive(lg, "lg")};
        display: ${ifProp("hide-lg", "none")};
        width: ${ifProp("wd-lg", prop("wd-lg", "initial"))};
    }

    @media (max-width: ${md}px) {
        ${marginResponsive(md, "md")};
        ${paddingResponsive(md, "md")};
        display: ${ifProp("hide-md", "none")};
        width: ${ifProp("wd-md", prop("wd-md", "initial"))};
    }

    @media (max-width: ${sm}px) {
        ${marginResponsive(sm, "sm")};
        ${paddingResponsive(sm, "sm")};
        display: ${ifProp("hide-sm", "none")};
        width: ${ifProp("wd-sm", prop("wd-sm", "initial"))};
    }

    @media (max-width: ${xs}px) {
        ${marginResponsive(xs, "xs")};
        ${paddingResponsive(xs, "xs")};
        display: ${ifProp("hide-xs", "none")};
        width: ${ifProp("wd-xs", prop("wd-xs", "initial"))};
    }
`;

export default Column;
