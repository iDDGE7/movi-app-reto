import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
import closeIcon from "assets/closeIcon.svg";
import eyeIcon from "assets/eyeIcon.svg";
import closeEyeIcon from "assets/closeEyeIcon.svg";

const { primaryBlue, primaryGreen, neutralBlack, greysLight, neutralWhite } = colors;
const { xs, sm, md, lg } = dimentions;

const WrapperField = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    width: 100%;
    max-width: 320px;

    ${({ mb, message }) => {
        if (mb) {
            return css`
                margin-bottom: ${mb};
            `;
        }

        if (!mb && message) {
            return css`
                margin-bottom: 1.9em;
            `;
        }
    }}

    & > * {
        user-select: none;
    }

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

    &::placeholder {
        color: transparent;
    }

    ${({ value }) => {
        if (value !== "") {
            return css`
                background: ${neutralWhite};
                border: 2px solid ${primaryBlue};
            `;
        }
    }}

    &:focus {
        border: none;
        outline: none;
        background: ${neutralWhite};

        border: 2px solid ${primaryGreen};
        transition: all 0.5s;
        & + label {
            font-size: 13px;
            top: 0;
            opacity: 1;
            color: ${primaryGreen};
            background-color: ${neutralWhite};
        }
    }
`;

const Label = styled.label`
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${primaryBlue};
    opacity: 0.8;
    background: transparent;
    border-radius: 10px;
    padding: 0 10px;
    line-height: normal;
    font-size: 1em;
    left: 1em;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;

    ${({ value }) => {
        if (value !== "") {
            return css`
                font-size: 13px;
                transition: all 0.5s;
                top: 0;
                opacity: 1;
                color: ${primaryBlue};
                background: ${neutralWhite};
            `;
        }
    }}

    &:hover {
        cursor: text;
    }
`;

const ClearButton = styled.button`
    width: 20px;
    height: 20px;
    background-image: url(${closeIcon});
    background-size: contain;
    background-repeat: no-repeat;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;

    cursor: pointer;
`;

const ShowPasswordButton = styled.button`
    width: 20px;
    height: 20px;
    background-image: url(${({ showPassword }) => (showPassword ? closeEyeIcon : eyeIcon)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    cursor: pointer;
`;

const InputMessage = styled.p`
    position: absolute;
    top: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 5px 0 0 15px;

    color: ${neutralBlack};
    opacity: 0.6;
`;

export { WrapperField, Input, Label, ClearButton, ShowPasswordButton, InputMessage };
