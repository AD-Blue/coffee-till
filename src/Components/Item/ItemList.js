import React, { useContext } from 'react'
import { Flex, Button, Text, UnorderedList, Spacer } from "@chakra-ui/react";
import ItemCard from './ItemCard';
import { GlobalContext } from '../../Context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export default function ItemList() {
    const { items, removeItem, addOrder } = useContext(GlobalContext);

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

    const handlePay = () => {
        console.log("paying...");

        const itemList = [];

        for (const item of items) {
            itemList.push(item);
        }
        console.log('creating new order...')
        const newOrder = {
            items: itemList,
            total: total
        }

        addOrder(newOrder);
        console.log('new order added');
        for (const item of items) {
            removeItem(item._id);
        }
    }

    return (
        <Flex w="25%" bg='brand.100' flexDirection='column' borderLeft='1px' borderColor='brand.300'>
            <UnorderedList w="90%" pl="3%" color='brand.400'>
                {content}
            </UnorderedList>
            <Spacer />
            <Text 
                ml="3%" color='brand.400' 
                align="right" mb="3%" mr='3%'
                fontSize='1.5rem'
            >Total: ${numberWithCommas(total.toFixed(2))}</Text>
            <Button colorScheme="teal" variant="outline" ml="3%" mr="3%" mb="3%" onClick={handlePay}>
                Pay
            </Button>
        </Flex>
    )
}
