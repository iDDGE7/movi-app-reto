import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
import animation from "constants/animation";

const Section = styled.section`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "column")};
    justify-content: ${prop("jc", "initial")};
    align-items: ${prop("align", "flex-start")};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    ${({ customAnimation }) => customAnimation && animation[customAnimation]}

    ${margin()};
    ${padding()};

    @media ${device.xl} {
        display: ${ifProp("hide-xl", "none")};
        width: ${ifProp("wd-lg", prop("wd-xl", "initial"))};
        ${margin("xl")};
        ${padding("xl")};
    }
    @media ${device.lg} {
        display: ${ifProp("hide-lg", "none")};
        width: ${ifProp("wd-lg", prop("wd-lg", "initial"))};
        ${margin("lg")};
        ${padding("lg")};
    }
    @media ${device.md} {
        display: ${ifProp("hide-md", "none")};
        width: ${ifProp("wd-md", prop("wd-md", "initial"))};
        ${margin("md")};
        ${padding("md")};
    }
    @media ${device.sm} {
        display: ${ifProp("hide-sm", "none")};
        width: ${ifProp("wd-sm", prop("wd-sm", "initial"))};
        ${margin("sm")};
        ${padding("sm")};
    }
    @media ${device.xs} {
        display: ${ifProp("hide-xs", "none")};
        width: ${ifProp("wd-xs", prop("wd-xs", "initial"))};
        ${margin("xs")};
        ${padding("xs")};
    }
`;

export default Section;
