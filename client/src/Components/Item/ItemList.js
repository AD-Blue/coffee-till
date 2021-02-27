import React from 'react'
import { Flex, Button, Text, UnorderedList, Spacer } from "@chakra-ui/react";
import ItemCard from './ItemCard';

export default function ItemList() {
    return (
        <Flex w="25%" bg='#037ef3' flexDirection='column'>
            <UnorderedList w="90%" pl="3%">
                <ItemCard />
                <ItemCard />
            </UnorderedList>
            <Spacer />
            <Text ml="3%" align="left" mb="3%">Total: $X.yz</Text>
            <Button colorScheme="orange" variant="outline" ml="3%" mr="3%" mb="2%">
                Pay
            </Button>
        </Flex>
    )
}
