import React, { useContext, useEffect } from 'react';
import { Flex, Text, ListItem, Heading, UnorderedList } from '@chakra-ui/react';
import { GlobalContext } from '../Context/GlobalState';
import { numberWithCommas } from '../utils/format';
import OrderItem from './OrderItem';

export default function OrderCard({order}) {
    return (
        <ListItem w='350px'>
            <Flex border='2px' borderColor='tomato' direction='column' ml='2%' mr='2%' p='2%'>
                <Heading size='md' mb='16px'>
                    Order ID: {order._id}
                </Heading>
                <UnorderedList>
                    {order.items.map((item) => (
                        <OrderItem key={item._id} item={item} />
                    )
                    )}
                </UnorderedList>
                <Text textAlign='right' mt='10%'>Total: ${numberWithCommas(order.total.toFixed(2))}</Text>
            </Flex>
        </ListItem>
    )
}
