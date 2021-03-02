import React from 'react';
import { ListItem, Flex, Text } from '@chakra-ui/react';

export default function OrderItem() {
    return (
        <ListItem>
            <Flex justify='space-between'>
                <Text>Item name</Text>
                <Text>Item price</Text>
            </Flex>
        </ListItem>
    )
}
