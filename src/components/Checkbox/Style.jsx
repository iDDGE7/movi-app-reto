import styled, { css } from "styled-components";
import { prop, ifProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
import checkIcon from "assets/checkIcon.svg";
const { greysLighter, primaryGreen } = colors;
const { xs, sm, md, lg } = dimentions;

const WrapperCheckbox = styled.div`
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
