import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { device } from "constants/device";
import { margin, padding } from "constants/mixing";
import animation from "constants/animation";

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
    overflow-y: ${ifProp("of-y", prop("of-y", "initial"))};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    ${({ customAnimation }) => customAnimation && animation[customAnimation]}

    ${margin()};
    ${padding()};

    @media ${device.xl} {
        display: ${ifProp("hide-xl", "none")};
        width: ${ifProp("wd-lg", prop("wd-xl", "initial"))};
        max-width: ${ifProp("mx-wd-xl", prop("mx-wd-xl", "100%"))};
        ${margin("xl")};
        ${padding("xl")};
    }

    @media ${device.lg} {
        display: ${ifProp("hide-lg", "none")};
        width: ${ifProp("wd-lg", prop("wd-lg", "initial"))};
        max-width: ${ifProp("mx-wd-lg", prop("mx-wd-lg", "100%"))};
        ${margin("lg")};
        ${padding("lg")};
    }

    @media ${device.md} {
        display: ${ifProp("hide-md", "none")};
        width: ${ifProp("wd-md", prop("wd-md", "initial"))};
        max-width: ${ifProp("mx-wd-md", prop("mx-wd-md", "100%"))};
        ${margin("md")};
        ${padding("md")};
    }

    @media ${device.sm} {
        display: ${ifProp("hide-sm", "none")};
        width: ${ifProp("wd-sm", prop("wd-sm", "initial"))};
        max-width: ${ifProp("mx-wd-sm", prop("mx-wd-sm", "100%"))};
        ${margin("sm")};
        ${padding("sm")};
    }

    @media ${device.xs} {
        display: ${ifProp("hide-xs", "none")};
        width: ${ifProp("wd-xs", prop("wd-xs", "initial"))};
        max-width: ${ifProp("mx-wd-xs", prop("mx-wd-xs", "100%"))};
        ${margin("xs")};
        ${padding("xs")};
    }
`;

export default Column;
