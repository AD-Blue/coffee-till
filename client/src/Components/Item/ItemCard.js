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
            <Flex fontSize="18px" color='brand.400' alignContent='center'>
                <Text>{item.name}</Text>
                <Spacer />
                <Text>${numberWithCommas(item.price.toFixed(2))}</Text>
                <CloseButton size='sm' onClick={handleClick} ml='1%' />
            </Flex>
        </ListItem>
    )
}
