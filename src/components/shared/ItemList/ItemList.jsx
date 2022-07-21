import React from "react";
import { Icon, Text } from "components/shared";
import { ItemListWrapper } from "./Style";

const ItemList = ({ icon, children, textProps, ...props }) => {
    return (
        <ItemListWrapper {...props} mb="2em">
            {icon && <Icon src={icon} />}
            <Text color="neutralWhite" ml={icon ? "1em" : "initial"} fw="300" fs="16px" {...textProps}>
                {children}
            </Text>
        </ItemListWrapper>
    );
};

export default ItemList;
