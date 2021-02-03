import React from 'react';
import { ListItem, Text, Flex, Spacer } from "@chakra-ui/react"
import AddOn from './AddOn';

export default function ItemCard() {
    return (
        <ListItem>
            <Flex bg='tomato' fontSize="18px">
                <Text>Item Name</Text>
                <Spacer />
                <Text>$X.YZ</Text>
            </Flex>
            <AddOn />
            <AddOn />
        </ListItem>
    )
}
