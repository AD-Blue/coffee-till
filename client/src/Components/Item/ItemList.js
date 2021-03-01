import React, { useContext, useEffect } from 'react'
import { Flex, Button, Text, UnorderedList, Spacer } from "@chakra-ui/react";
import ItemCard from './ItemCard';
import { GlobalContext } from '../../Context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export default function ItemList() {
    const { items, getItems } = useContext(GlobalContext);

    console.log('itemlist rendered')

    let content = null;
    let total = 0;

    for (const item of items) {
        total += item.price;
    }

    if (items) {
        content = items.map((item) => (
            <ItemCard key={item._id} item={item} />
        ))
    }
    else {
        content = <Text>Loading...</Text>
    }

    return (
        <Flex w="25%" bg='#037ef3' flexDirection='column'>
            <UnorderedList w="90%" pl="3%">
                {content}
            </UnorderedList>
            <Spacer />
            <Text ml="3%" align="left" mb="3%">Total: ${numberWithCommas(total.toFixed(2))}</Text>
            <Button colorScheme="orange" variant="outline" ml="3%" mr="3%" mb="2%">
                Pay
            </Button>
        </Flex>
    )
}
