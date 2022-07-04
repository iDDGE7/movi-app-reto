import React, { useRef, useState, useCallback, useEffect } from "react";
import { Icon, Text, Image, Button } from "components";
import {
    WrapperInputFile,
    ButtonSelectMedia,
    InputMedia,
    ButtonReplaceImage,
    WebCamWrapper,
    WrapperCameraViewer,
    WebCamViewer,
    ButtonCloseWebCam,
} from "./Style";
import uploadIcon from "assets/uploadIcon.svg";
import { Row, Column } from "layouts";
import { colors } from "constants/colors";
import successIcon from "assets/successIcon.svg";
const { greysDark, successColor } = colors;

const InputFile = ({ type = "image", name, label, getDataField }) => {
    const [file, setFile] = useState(null);
    const webcamRef = useRef(null);
    const inputFileRef = useRef(null);
    const [activeWebCam, setActiveWebCam] = useState(false);
    const videoConstraints = {
        facingMode: "user",
        width: 1000,
        height: 1000,
    };

    useEffect(() => {
        if (file && type === "camera") {
            getDataField({ name, value: file });
        }
        // eslint-disable-next-line
    }, [file]);

    const handleClickButton = (e) => {
        if (type === "image" && inputFileRef && inputFileRef.current) {
            inputFileRef.current.click();
        }
        if (type === "camera" && inputFileRef && inputFileRef.current) {
            setActiveWebCam(true);
            setFile(false);
        }
    };

    const onChangeFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setFile(e.target.result);
            getDataField({ name, value: e.target.result });
        };
        reader.readAsDataURL(file);
    };

    const capture = useCallback(() => {
        const file = webcamRef.current.getScreenshot();
        setFile(file);
    }, [webcamRef]);

    return (
        <WrapperInputFile>
            <InputMedia type="file" ref={inputFileRef} onChange={onChangeFile} accept="image/png, image/jpeg" />
            {file && (
                <Row
                    mb="2.5em"
                    border={file ? ` 1px solid ${successColor}` : `dashed 1px ${greysDark}`}
                    br="8px"
                    pd="11px 1em"
                    pos="relative"
                >
                    <Image src={file} wd="64px" hg="64px" br="1em" of="hidden" o-fit="cover" />
                    <Column align="flex-start" pd="initial" ml="1em" jc="center">
                        <Text tx-align="flex-start" color="greysDark">
                            Texto
                        </Text>
                        <ButtonReplaceImage onClick={handleClickButton}>Reemplazar</ButtonReplaceImage>
                    </Column>
                    <Icon src={successIcon} pos="absolute" right="1em" bottom="0.8em" />
                </Row>
            )}
            {!file && (
                <ButtonSelectMedia onClick={handleClickButton}>
                    <Icon src={uploadIcon} wd="20px" hg="17px" mr="1em" />
                    <Text fw="700" fs="1.1em">
                        {label}
                    </Text>
                </ButtonSelectMedia>
            )}

            {activeWebCam && type === "camera" && (
                <WebCamWrapper>
                    <WrapperCameraViewer>
                        <ButtonCloseWebCam onClick={() => setActiveWebCam(false)} />
                        <Text mt="2.3em" mb="2em" color="neutralBlack">
                            Tómate una foto de frente
                        </Text>

                        {!file && (
                            <>
                                <WebCamViewer
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={videoConstraints}
                                />

                                <Button theme="dark" bc="#000000" br="100px" onClick={capture}>
                                    Tomar foto
                                </Button>
                            </>
                        )}
                        {file && (
                            <>
                                <Image src={file} wd="100%" mx-wd="355px" br="1em" of="hidden" o-fit="cover" mb="3em" />

                                <Button theme="dark" bc="#000000" br="100px" onClick={() => setActiveWebCam(false)}>
                                    Confirmar
                                </Button>
                            </>
                        )}
                    </WrapperCameraViewer>
                </WebCamWrapper>
            )}
        </WrapperInputFile>
    );
};

export default InputFile;
