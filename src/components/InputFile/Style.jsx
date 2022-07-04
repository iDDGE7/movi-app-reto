import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { dimentions, marginResponsive, paddingResponsive } from "constants/spaces";
import { colors } from "constants/colors";
import Webcam from "react-webcam";
import borderCorner from "assets/borderCorner.svg";
import closeIcon from "assets/closeIcon.svg";
const { greysDark } = colors;
const { xs, sm, md, lg } = dimentions;

const WrapperInputFile = styled.div`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "row")};
    justify-content: ${ifProp("jc", prop("jc", "space-around"))};
    align-items: ${ifProp("align", prop("align", "flex-start"))};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};
    overflow-x: ${ifProp("of-x", prop("of-x", "auto"))};
    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};

    position: ${ifProp("pos", prop("pos", "static"))};
    top: ${ifProp("top", prop("top", "auto"))};
    right: ${ifProp("right", prop("right", "auto"))};
    bottom: ${ifProp("bottom", prop("bottom", "auto"))};
    left: ${ifProp("left", prop("left", "auto"))};

    ${marginResponsive()};
    padding: ${ifProp("pd", prop("pd", "1em"))};
    padding-left: ${ifProp("pl", prop("pl", "1em"))};
    padding-right: ${ifProp("pr", prop("pr", "1em"))};
    padding-top: ${ifProp("pt", prop("pt", "1em"))};
    padding-bottom: ${ifProp("pb", prop("pb", "1em"))};

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

const InputMedia = styled.input`
    display: none;
`;

const ButtonSelectMedia = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 380px;
    padding: 2.5em 1em;
    margin-bottom: 2.5em;
    border: dashed 1px ${greysDark};
    border-radius: 8px;

    &:active,
    &:focus {
        border: dashed 1px ${greysDark};
    }
`;

const ButtonReplaceImage = styled.div`
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
`;

const WebCamWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #0a22404c;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
`;

const WrapperCameraViewer = styled.div`
    position: relative;
    width: 100%;
    max-width: 379px;
    /* height: 604px; */
    background: #ffffff;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5em;
`;

const WebCamViewer = styled(Webcam)`
    width: 100%;
    position: relative;
    display: flex;
    border: 10px solid transparent;
    border-image: url(${borderCorner}) 20 stretch;

    margin-bottom: 2em;
`;

const ButtonCloseWebCam = styled.button`
    position: absolute;
    left: 2em;
    top: 2em;
    width: 15px;
    height: 15px;
    background: url(${closeIcon}) no-repeat center center;
`;

export {
    WrapperInputFile,
    ButtonSelectMedia,
    InputMedia,
    ButtonReplaceImage,
    WrapperCameraViewer,
    WebCamWrapper,
    WebCamViewer,
    ButtonCloseWebCam,
};
