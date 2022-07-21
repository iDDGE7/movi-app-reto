import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";

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

    ${margin()};
    ${padding()};
    @media ${device.xl} {
        ${margin("xl")};
        ${padding("xl")};
    }

    @media ${device.lg} {
        ${margin("lg")};
        ${padding("lg")};
    }

    @media ${device.md} {
        ${margin("md")};
        ${padding("md")};
    }

    @media ${device.sm} {
        ${margin("sm")};
        ${padding("sm")};
    }

    @media ${device.xs} {
        ${margin("xs")};
        ${padding("xs")};
    }
`;

export default _Link;
