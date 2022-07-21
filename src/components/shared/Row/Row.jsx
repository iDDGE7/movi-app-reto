import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
import animation from "constants/animation";

const Row = styled.article`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${ifProp("jc", prop("jc", "space-around"))};
    align-items: ${ifProp("align", prop("align", "flex-start"))};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};
    border-radius: ${ifProp("br", prop("br", "none"))};
    border: ${ifProp("border", prop("border", "none"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "100vh"))};
    min-height: ${ifProp("mn-hg", prop("mn-hg", "initial"))};
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
    box-shadow: ${ifProp("b-shadow", prop("b-shadow", "initial"))};

    ${({ customAnimation }) => customAnimation && animation[customAnimation]}

    ${margin()};
    ${padding()};
    @media ${device.xl} {
        ${margin("xl")};
        ${padding("xl")};
        max-width: ${ifProp("mx-wd-xl", prop("mx-wd-xl", "100%"))};
    }

    @media ${device.lg} {
        ${margin("lg")};
        ${padding("lg")};
        max-width: ${ifProp("mx-wd-lg", prop("mx-wd-lg", "100%"))};
    }

    @media ${device.md} {
        ${margin("md")};
        ${padding("md")};
        max-width: ${ifProp("mx-wd-md", prop("mx-wd-md", "100%"))};
    }

    @media ${device.sm} {
        ${margin("sm")};
        ${padding("sm")};
        max-width: ${ifProp("mx-wd-sm", prop("mx-wd-sm", "100%"))};
    }

    @media ${device.xs} {
        ${margin("xs")};
        ${padding("xs")};
        max-width: ${ifProp("mx-wd-xs", prop("mx-wd-xs", "100%"))};
    }
`;

export default Row;
