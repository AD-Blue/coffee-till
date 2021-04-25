/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Flex, UnorderedList } from '@chakra-ui/react';
import { GlobalContext } from '../../Context/GlobalState';
import OrderCard from '../Order/OrderCard';
import NavBar from '../NavBar';

export default function OrderHistory() {
    const { orders, getOrders } = useContext(GlobalContext);

    useEffect(() => {
        getOrders();
    }, []);

    console.log('history rendered/routed to');
    console.log(orders)

    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <NavBar prev='/' />
            <Flex overflowX='scroll' h='100%' mt='1%'>
                <UnorderedList styleType='none'>
                    <Flex direction='row'>
                        {orders.slice(0).reverse().map((order) => (
                            <OrderCard key={order._id} order={order} />
                        ))}
                    </Flex>
                </UnorderedList>
            </Flex>
        </Flex>
    )
}
