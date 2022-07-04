import React from "react";
import { Icon, Text } from "components";
import { ItemListWrapper } from "./Style";

const ItemList = ({ icon, children, textProps, ...props }) => {
    return (
        <ItemListWrapper {...props} mb="1em">
            {icon && <Icon src={icon} />}
            <Text color="neutralWhite" ml={icon ? "1em" : "initial"} fw="400" fs="16px" {...textProps}>
                {children}
            </Text>
        </ItemListWrapper>
    );
};

export default ItemList;
