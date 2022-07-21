import styled, { css } from "styled-components";
import { prop, ifProp } from "styled-tools";
import { colors } from "constants/colors";
import checkIcon from "assets/checkIcon.svg";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
const { greysLighter, primaryGreen } = colors;

const WrapperCheckbox = styled.div`
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

const InputCheckbox = styled.input`
    display: none;
`;

const IconChecked = styled.label`
    display: block;
    width: ${prop("wd", "32px")};
    height: ${prop("hg", "32px")};
    ${({ value }) => {
        if (value) {
            return css`
                background-color: ${primaryGreen};
                background-image: url(${checkIcon});
                background-repeat: no-repeat;
                background-position: center center;
            `;
        } else {
            return css`
                background-color: ${greysLighter};
            `;
        }
    }}
    cursor: pointer;
    box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
    border-radius: 8px;
`;

export { WrapperCheckbox, InputCheckbox, IconChecked };
