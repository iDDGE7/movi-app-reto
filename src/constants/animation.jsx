import { css } from "styled-components";

const animation = {
    fadeUp: css`
        animation: animationFadeUp 0.5s ease-out;
        @keyframes animationFadeUp {
            from {
                transform: translateY(2%);
                opacity: 0;
            }
            to {
                transform: translateY(0%);
                opacity: 1;
            }
        }
    `,
    fadeRight: css`
        animation: animationFadeRight 0.5s ease-out;
        @keyframes animationFadeRight {
            from {
                transform: translateX(-2%);
                opacity: 0;
            }
            to {
                transform: translateX(0%);
                opacity: 1;
            }
        }
    `,
    fadeDown: css`
        animation: animationFadeDown 0.5s ease-out;
        @keyframes animationFadeDown {
            from {
                transform: translateY(-2%);
                opacity: 0;
            }
            to {
                transform: translateY(0%);
                opacity: 1;
            }
        }
    `,
    fadeLeft: css`
        animation: animationFadeLeft 0.5s ease-out;
        @keyframes animationFadeLeft {
            from {
                transform: translateX(2%);
                opacity: 0;
            }
            to {
                transform: translateX(0%);
                opacity: 1;
            }
        }
    `,
};

export default animation;
