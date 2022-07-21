import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";

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

export default WrapperFooter;
