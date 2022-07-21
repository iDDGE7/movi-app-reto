import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";

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

export default Icon;
