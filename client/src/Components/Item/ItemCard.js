import React, { useContext } from 'react';
import { ListItem, Text, Flex, Spacer, CloseButton } from "@chakra-ui/react"
import AddOn from './AddOn';
import { numberWithCommas } from '../../utils/format';
import { GlobalContext } from '../../Context/GlobalState';

export default function ItemCard({item}) {
    const { removeItem } = useContext(GlobalContext);
    const handleClick = () => {
        removeItem(item._id);
    }

    return (
        <ListItem>
            <Flex bg='tomato' fontSize="18px">
                <Text>{item.name}</Text>
                <Spacer />
                <Text>${numberWithCommas(item.price.toFixed(2))}</Text>
                <CloseButton onClick={handleClick} />
            </Flex>
        </ListItem>
    )
}
