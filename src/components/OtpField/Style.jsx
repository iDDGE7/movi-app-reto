import styled from "styled-components";
import { ifProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { primaryBlue, primaryGreen, greysLight, neutralWhite } = colors;
const { xs, sm, md, lg } = dimentions;

const WrapperOtpField = styled.form`
    display: flex;
    justify-content: space-around;

    width: 100%;
    max-width: 320px;

    ${marginResponsive()}
    ${paddingResponsive()}

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

const Input = styled.input`
    padding: 1em;
    margin: 0 1em;
    width: 100%;
    flex-grow: 1;
    border-radius: 8px;
    background-color: ${greysLight};
    border: 2px solid ${neutralWhite};
    transition: all 0.2s;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${primaryBlue};

    &[value=""]:focus {
        border: 2px solid ${neutralWhite};
        outline: none;
    }
`;

export { WrapperOtpField, Input };
