import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { device } from "constants/device";
import { margin, padding } from "constants/mixing";

const sharedStyle = css`
    display: ${ifProp("dp", prop("dp", "block"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    width: ${ifProp("wd", prop("wd", "initial"))};
    height: ${ifProp("hg", prop("hg", "initial"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    text-align: ${prop("text-align", "left")};
    line-height: ${prop("ln-hg", "initial")};
    text-transform: ${prop("txt-tf", "initial")};
    white-space: ${ifProp("white-sp", prop("white-sp", "normal"))};
    word-break: ${ifProp("word-bk", prop("word-bk", "initial"))};
    text-overflow: ${ifProp("text-of", prop("text-of", "clip"))};
    letter-spacing: ${ifProp("letter-sp", prop("letter-sp", "normal"))};
    text-transform: ${ifProp("text-tf", prop("text-tf", "normal"))};
    color: ${switchProp(prop("color", "primaryBlue"), colors, prop("color", "primaryBlue"))};
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

const p = styled.p`
    font-weight: ${prop("fw", "600")};
    font-size: ${prop("fs", "1.1em")};

    @media ${device.xl} {
        font-size: ${ifProp("fs-xl", prop("fs-xl", "1.1em"), prop("fs"))};
        line-height: ${prop("ln-hg-xl", "1.2em")};
    }

    @media ${device.lg} {
        font-size: ${ifProp("fs-lg", prop("fs-lg", "1.1em"), prop("fs-xl"))};
        line-height: ${prop("ln-hg-lg", "1.2em")};
    }

    @media ${device.md} {
        font-size: ${ifProp("fs-md", prop("fs-md", "1.1em"), prop("fs-lg"))};
        line-height: ${prop("ln-hg-md", "1.2em")};
    }

    @media ${device.sm} {
        font-size: ${ifProp("fs-sm", prop("fs-sm", "1.1em"), prop("fs-md"))};
        line-height: ${prop("ln-hg-sm", "1.2em")};
    }

    @media ${device.xs} {
        font-size: ${ifProp("fs-xs", prop("fs-xs", "1.1em"), prop("fs-sm"))};
        line-height: ${prop("ln-hg-xs", "1.2em")};
    }

    ${sharedStyle};
`;
const h1 = styled.h1`
    font-weight: ${prop("fw", "600")};
    font-size: ${prop("fs", "2.4em")};
    @media ${device.xl} {
        font-size: ${ifProp("fs-xl", prop("fs-xl", "2.3em"), prop("fs"))};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${ifProp("fs-lg", prop("fs-lg", "2.2em"), prop("fs-xl"))};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${ifProp("fs-md", prop("fs-md", "2.1em"), prop("fs-lg"))};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${ifProp("fs-sm", prop("fs-sm", "2em"), prop("fs-md"))};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${ifProp("fs-xs", prop("fs-xs", "1.8em"), prop("fs-sm"))};
        line-height: ${prop("ln-hg-xs", "1em")};
    }

    ${sharedStyle};
`;
const h2 = styled.h2`
    @media ${device.xl} {
        font-size: ${prop("fs-xl", "2.3em")};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${prop("fs-lg", "2.2em")};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${prop("fs-md", "2.1em")};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${prop("fs-sm", "2em")};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${prop("fs-xs", "1.2em")};
        line-height: ${prop("ln-hg-xs", "1em")};
    }
    ${sharedStyle};
`;
const h3 = styled.h3`
    @media ${device.xl} {
        font-size: ${prop("fs-xl", "2.1em")};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${prop("fs-lg", "2em")};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${prop("fs-md", "1.9em")};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${prop("fs-sm", "1.8em")};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${prop("fs-xs", "1em")};
        line-height: ${prop("ln-hg-xs", "1em")};
    }
    ${sharedStyle};
`;
const h4 = styled.h4`
    @media ${device.xl} {
        font-size: ${prop("fs-xl", "2em")};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${prop("fs-lg", "1.9em")};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${prop("fs-md", "1.8em")};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${prop("fs-sm", "1.7em")};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${prop("fs-xs", "1em")};
        line-height: ${prop("ln-hg-xs", "1em")};
    }
    ${sharedStyle};
`;
const h5 = styled.h5`
    @media ${device.xl} {
        font-size: ${prop("fs-xl", "1.8em")};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${prop("fs-lg", "1.7em")};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${prop("fs-md", "1.6em")};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${prop("fs-sm", "1.5em")};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${prop("fs-xs", "1em")};
        line-height: ${prop("ln-hg-xs", "1em")};
    }
    ${sharedStyle};
`;
const h6 = styled.h6`
    @media ${device.xl} {
        font-size: ${prop("fs-xl", "1.6em")};
        line-height: ${prop("ln-hg-xl", "1em")};
    }

    @media ${device.lg} {
        font-size: ${prop("fs-lg", "1.5em")};
        line-height: ${prop("ln-hg-lg", "1em")};
    }

    @media ${device.md} {
        font-size: ${prop("fs-md", "1.4em")};
        line-height: ${prop("ln-hg-md", "1em")};
    }

    @media ${device.sm} {
        font-size: ${prop("fs-sm", "1.3em")};
        line-height: ${prop("ln-hg-sm", "1em")};
    }

    @media ${device.xs} {
        font-size: ${prop("fs-xs", "1em")};
        line-height: ${prop("ln-hg-xs", "1em")};
    }
    ${sharedStyle};
`;

const Tags = { p, h1, h2, h3, h4, h5, h6 };

export default Tags;
