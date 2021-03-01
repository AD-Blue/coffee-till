import React, { useContext, useEffect } from 'react'
import { Flex, Button, Text, UnorderedList, Spacer } from "@chakra-ui/react";
import ItemCard from './ItemCard';
import { GlobalContext } from '../../Context/GlobalState';

export default function ItemList() {
    const { items, getItems } = useContext(GlobalContext);
    let content = null;


    return (
        <Flex w="25%" bg='#037ef3' flexDirection='column'>
            <UnorderedList w="90%" pl="3%">
                {items.map((item) => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </UnorderedList>
            <Spacer />
            <Text ml="3%" align="left" mb="3%">Total: $X.yz</Text>
            <Button colorScheme="orange" variant="outline" ml="3%" mr="3%" mb="2%">
                Pay
            </Button>
        </Flex>
    )
}
