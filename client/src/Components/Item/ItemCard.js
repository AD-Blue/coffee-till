import React from 'react';
import { ListItem, Text, Flex, Spacer } from "@chakra-ui/react"
import AddOn from './AddOn';
import { numberWithCommas } from '../../utils/format';

export default function ItemCard({item}) {
    return (
        <ListItem>
            <Flex bg='tomato' fontSize="18px">
                <Text>{item.name}</Text>
                <Spacer />
                <Text>${numberWithCommas(item.price.toFixed(2))}</Text>
            </Flex>
        </ListItem>
    )
}
