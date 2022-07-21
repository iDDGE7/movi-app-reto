import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";

const ItemListWrapper = styled.li`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${prop("jc", "flex-start")};
    align-items: ${prop("align", "flex-start")};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${prop("wd", "intial")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

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

export { ItemListWrapper };
