import React, { useContext, useEffect } from 'react';
import { Flex, Text, ListItem, Heading, UnorderedList } from '@chakra-ui/react';
import { GlobalContext } from '../Context/GlobalState';
import OrderItem from './OrderItem';

export default function OrderCard() {
    return (
        <ListItem>
            <Flex border='2px' borderColor='tomato' direction='column'>
                <Heading size='xl'>
                    Order ID: 123456789
                </Heading>
                <UnorderedList>
                    <OrderItem />
                </UnorderedList>
            </Flex>
        </ListItem>
    )
}
