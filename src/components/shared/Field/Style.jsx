import styled, { css } from "styled-components";
import { colors } from "constants/colors";
import closeIcon from "assets/closeIcon.svg";
import eyeIcon from "assets/eyeIcon.svg";
import closeEyeIcon from "assets/closeEyeIcon.svg";
import { device } from "constants/device";

const { primaryBlue, primaryGreen, neutralBlack, greysLight, neutralWhite } = colors;

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

    @media ${device.sm} {
        font-size: 0.9em;
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

    @media ${device.sm} {
        font-size: 0.9em;
    }

    ${({ value }) => {
        if (value !== "") {
            return css`
                font-size: 13px;
                transition: all 0.5s;
                top: 0;
                opacity: 1;
                color: ${primaryBlue};
                background: ${neutralWhite};

                @media ${device.sm} {
                    font-size: 11px;
                }
            `;
        }
    }};

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

const ShowPasswordButton = styled.span`
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
