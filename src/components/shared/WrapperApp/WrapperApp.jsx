import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";

const WrapperApp = styled.div`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "column")};
    justify-content: ${prop("jc", "flex-start")};
    align-items: ${prop("align", "center")};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "100vh"))};
    min-height: ${prop("mn-hg", "100vh")};
    overflow: ${ifProp("of", prop("of", "initial"))};
    overflow-y: ${prop("of-y", "auto")};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};

    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};
`;

export default WrapperApp;
