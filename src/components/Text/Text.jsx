import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { xs, sm, md, lg } = dimentions;

const sharedStyle = css`
    color: ${switchProp(prop("color", "primaryBlue"), colors, prop("color", "primaryBlue"))};

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

const Text = styled.p`
    font-size: ${prop("fs", "18px")};
    ${sharedStyle}
`;
const Title = styled.h1`
    font-size: ${prop("fs", "38px")};
    ${sharedStyle}
`;

const H2 = styled.h2`
    font-size: ${prop("fs", "1.8em")};
    ${sharedStyle}
`;
const H3 = styled.h3`
    font-size: ${prop("fs", "1.6em")};
    ${sharedStyle}
`;
const H4 = styled.h4`
    font-size: ${prop("fs", "1.4em")};
    ${sharedStyle}
`;
const H5 = styled.h5`
    font-size: ${prop("fs", "1.2em")};
    ${sharedStyle}
`;
const H6 = styled.h6`
    font-size: ${prop("fs", "1em")};
    ${sharedStyle}
`;

export { Text, Title, H2, H3, H4, H5, H6 };
