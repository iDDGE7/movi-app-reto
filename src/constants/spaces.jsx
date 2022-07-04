import { css } from "styled-components";
import { ifProp, prop } from "styled-tools";

const dimentions = {
    xs: 320,
    sm: 768,
    md: 1024,
    lg: 1300,
};

const marginResponsive = (size, label) => {
    if (!size || !label)
        return css`
            margin: ${ifProp("mg", prop("mg", "1em"))};
            margin-left: ${ifProp("ml", prop("ml", "1em"))};
            margin-right: ${ifProp("mr", prop("mr", "1em"))};
            margin-top: ${ifProp("mt", prop("mt", "1em"))};
            margin-bottom: ${ifProp("mb", prop("mb", "1em"))};
        `;

    return css`
        @media (max-width: ${size}px) {
            margin-left: ${ifProp(`ml-${label}`, prop(`ml-${label}`, "1em"))};
            margin-right: ${ifProp(`mr-${label}`, prop(`mr-${label}`, "1em"))};
            margin-top: ${ifProp(`mt-${label}`, prop(`mt-${label}`, "1em"))};
            margin-bottom: ${ifProp(`mb-${label}`, prop(`mb-${label}`, "1em"))};
        }
    `;
};

const paddingResponsive = (size, label) => {
    if (!size || !label)
        return css`
            padding: ${ifProp("pd", prop("pd", "1em"))};
            padding-left: ${ifProp("pl", prop("pl", "1em"))};
            padding-right: ${ifProp("pr", prop("pr", "1em"))};
            padding-top: ${ifProp("pt", prop("pt", "1em"))};
            padding-bottom: ${ifProp("pb", prop("pb", "1em"))};
        `;

    return css`
        @media (max-width: ${size}px) {
            padding: ${ifProp(`pd-${label}`, prop(`pd-${label}`, "1em"))};
            padding-left: ${ifProp(`pl-${label}`, prop(`pl-${label}`, "1em"))};
            padding-right: ${ifProp(`pr-${label}`, prop(`pr-${label}`, "1em"))};
            padding-top: ${ifProp(`pt-${label}`, prop(`pt-${label}`, "1em"))};
            padding-bottom: ${ifProp(`pb-${label}`, prop(`pb-${label}`, "1em"))};
        }
    `;
};

export { dimentions, marginResponsive, paddingResponsive };
