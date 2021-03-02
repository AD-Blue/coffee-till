import React, { useContext, useEffect } from 'react'
import { Flex, Text, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { GlobalContext } from '../../Context/GlobalState';
import OrderCard from '../Order/OrderCard';

export default function OrderHistory() {
    const { orders, getOrders } = useContext(GlobalContext);

    useEffect(() => {
        getOrders();
    }, []);

    console.log('history rendered/routed to');
    console.log(orders)

    return (
        <Flex direction='column' bg='green' w='100%'>
            <Flex w='100%' bg='#037ef3' pt='1%' pb='1%'>
                <Link to='/'>
                    <ArrowBackIcon w={8} h={8} ml='20%' />
                </Link>
            </Flex>
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
