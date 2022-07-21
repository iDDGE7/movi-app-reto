import styled from "styled-components";
import { prop, ifProp, switchProp } from "styled-tools";
import { colors } from "constants/colors";

const Form = styled.form`
    display: ${prop("dp", "flex")};
    flex-direction: ${prop("fd", "column")};
    justify-content: ${prop("jc", "flex-start")};
    align-items: ${prop("align", "center")};
    flex-wrap: ${ifProp("f-wrap", prop("f-wrap", "nowrap"))};
    flex-grow: ${ifProp("f-grow", prop("f-grow", "1"))};

    width: ${prop("wd", "100%")};
    height: ${ifProp("hg", prop("hg", "initial"))};
    position: ${ifProp("pos", prop("pos", "static"))};
    max-width: ${ifProp("mx-wd", prop("mx-wd", "100%"))};
    overflow: ${ifProp("of", prop("of", "initial"))};

    background: ${switchProp(prop("bc", "transparent"), colors, prop("bc", "transparent"))};
`;

Form.defaultProps = {
    autoComplete: "off",
};

export default Form;
