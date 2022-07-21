import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
const Image = styled.img`
    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "100%"))};
    max-height: ${ifProp("mx-hg", prop("mx-hg", "910px"))};
    object-position: ${prop("op", "center center")};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};
    object-fit: ${prop("o-fit", "contain")};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "332px"))};
    border-radius: ${ifProp("br", prop("br", "10px"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    top: ${ifProp("top", prop("top", "auto"))};
    right: ${ifProp("right", prop("right", "auto"))};
    bottom: ${ifProp("bottom", prop("bottom", "auto"))};
    left: ${ifProp("left", prop("left", "auto"))};
    overflow: ${ifProp("of", prop("of", "auto"))};

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

export default Image;
