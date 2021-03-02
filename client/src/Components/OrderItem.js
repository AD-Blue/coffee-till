import React from 'react';
import { ListItem, Flex, Text } from '@chakra-ui/react';
import { numberWithCommas } from '../utils/format';

export default function OrderItem({item}) {
    return (
        <ListItem>
            <Flex justify='space-between'>
                <Text>{item.name}</Text>
                <Text>${numberWithCommas(item.price.toFixed(2))}</Text>
            </Flex>
        </ListItem>
    )
}
