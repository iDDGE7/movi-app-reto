import styled from "styled-components";
import { colors } from "constants/colors";
import { margin, padding } from "constants/mixing";
import { device } from "constants/device";
const { primaryBlue, greysLight, neutralWhite } = colors;

const WrapperOtpField = styled.form`
    display: flex;
    justify-content: space-around;

    width: 100%;
    max-width: 320px;

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

const Input = styled.input`
    /* padding: 1em; */
    width: 50px;
    height: 60px;
    /* margin: 0 1em; */
    border-radius: 8px;
    background-color: ${greysLight};
    border: 2px solid ${neutralWhite};
    transition: all 0.2s;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: ${primaryBlue};

    &:focus {
        border: 2px solid ${neutralWhite};
        outline: none;
    }
`;

export { WrapperOtpField, Input };
