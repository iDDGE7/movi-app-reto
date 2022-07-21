import React from "react";
import Tags from "./Style";

const Text = ({ type = "p", children, ...props }) => {
    const Tag = Tags[type];
    return (
        <Tag type={type} {...props}>
            {children}
        </Tag>
    );
};

export default Text;
