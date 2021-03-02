import React, { useContext, useEffect } from 'react'
import { Flex, Text, UnorderedList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { GlobalContext } from '../../Context/GlobalState';
import OrderCard from '../OrderCard';

export default function OrderHistory() {
    const { order, getOrders } = useContext(GlobalContext);

    useEffect(() => {
        getOrders();
    }, [])

    console.log('history rendered/routed to')
    
    return (
        <Flex direction='column' bg='green' w='100%'>
            <Flex w='100%' bg='#037ef3'>
                <Link to='/'>
                    <ArrowBackIcon />
                </Link>
                
            </Flex>
            <Flex overflowX='scroll' h='100%'>
                <UnorderedList>
                    <Flex direction='row'>
                        <OrderCard />
                        <OrderCard />
                    </Flex>
                    
                </UnorderedList>
            </Flex>
        </Flex>
    )
}
