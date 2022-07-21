import styled, { css } from "styled-components";
import { ifProp, prop, switchProp } from "styled-tools";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
const { primaryBlue, primaryGreen, greysLight, greysDark, neutralWhite } = colors;

const Button = styled.button`
    width: ${prop("wd", "100%")};
    max-width: ${prop("mx-wd", "332px")};
    padding: 20px 16px;
    border-radius: ${prop("br", "0.3em")};
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
                    prop("color", theme === "dark" ? "primaryBlue" : "primaryBlue"),
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

    ${margin()};
    ${padding()};
    @media ${device.xl} {
        width: ${ifProp("wd-lg", prop("wd-xl", "initial"))};
        max-width: ${ifProp("mx-wd-xl", prop("mx-wd-xl", "100%"))};
        ${margin("xl")};
        ${padding("xl")};
    }
    @media ${device.lg} {
        width: ${ifProp("wd-lg", prop("wd-lg", "initial"))};
        max-width: ${ifProp("mx-wd-lg", prop("mx-wd-lg", "100%"))};
        ${margin("lg")};
        ${padding("lg")};
    }
    @media ${device.md} {
        width: ${ifProp("wd-md", prop("wd-md", "initial"))};
        max-width: ${ifProp("mx-wd-md", prop("mx-wd-md", "100%"))};
        ${margin("md")};
        ${padding("md")};
    }
    @media ${device.sm} {
        width: ${ifProp("wd-sm", prop("wd-sm", "initial"))};
        max-width: ${ifProp("mx-wd-sm", prop("mx-wd-sm", "100%"))};
        ${margin("sm")};
        ${padding("sm")};
    }
    @media ${device.xs} {
        width: ${ifProp("wd-xs", prop("wd-xs", "initial"))};
        max-width: ${ifProp("mx-wd-xs", prop("mx-wd-xs", "100%"))};
        ${margin("xs")};
        ${padding("xs")};
    }
`;

export default Button;
