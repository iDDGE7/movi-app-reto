import styled, { css } from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
const { primaryBlue, primaryGreen, greysLight, greysDark, neutralWhite } = colors;
const { xs, sm, md, lg } = dimentions;

const Button = styled.button`
    width: ${prop("wd", "100%")};
    max-width: ${prop("mx-wd", "332px")};
    padding: 15px 16px;
    border-radius: ${prop("br", "10px")};
    font-size: ${prop("fs", "16px")};
    font-weight: ${prop("fw", "700")};

    ${({ disabled, theme }) => {
        if (disabled) {
            return css`
                background: ${prop("bc", greysLight)};
                color: ${prop("color", greysDark)};
            `;
        }

        if (!disabled) {
            return css`
                background: ${switchProp(prop("bc", "primaryGreen"), colors, prop("bc", "primaryGreen"))};
                color: ${switchProp(
                    prop("color", theme === "dark" ? "neutralWhite" : "primaryBlue"),
                    colors,
                    prop("color", "primaryBlue")
                )};

                position: ${prop("pos", "relative")};
                overflow: ${prop("of", "hidden")};
                transition: all 0.5s ease-in-out;
                z-index: 1;
                &:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 0px;
                    height: 0px;
                    border: 0px solid ${primaryBlue};
                    background: ${primaryBlue};
                    border-radius: 100%;
                    transition: all 0.5s ease-in-out;
                    z-index: -1;
                }

                &:hover {
                    transition: all 0.5s ease-in-out;
                    color: ${prop("color", theme === "dark" ? primaryBlue : neutralWhite)};
                    &:before {
                        transition: all 0.3s ease-in;

                        background: ${theme === "dark" ? neutralWhite : primaryBlue};
                        border: 60px solid ${primaryGreen};
                        width: 400px;
                        height: 400px;
                    }
                }
            `;
        }
    }};

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

export default Button;
