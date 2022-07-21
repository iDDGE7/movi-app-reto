import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { Link } from "components/shared";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";

const HeaderContainer = styled.header`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${prop("jc", "center")};
    align-items: ${ifProp("align", prop("align", "flex-start"))};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};
    box-shadow: 0px 0px 4px rgba(31, 48, 64, 0.1);
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

const LogoHeader = styled.img`
    width: 80px;
    height: 20px;
`;

const Navigation = styled.nav`
    ${Link} {
        &:not(:first-child) {
            margin-left: 1em;
        }
    }
`;

export { HeaderContainer, LogoHeader, Navigation };
