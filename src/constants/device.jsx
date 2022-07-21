const sizes = {
    xs: "320px",
    sm: "425px",
    md: "768px",
    lg: "1024px",
};

const device = {
    xs: `(max-width: ${sizes.xs})`,
    sm: `(max-width: ${sizes.sm})`,
    md: `(max-width: ${sizes.md})`,
    lg: `(max-width: ${sizes.lg})`,
    xl: `(min-width: ${sizes.lg})`,
};

export { device, sizes };
