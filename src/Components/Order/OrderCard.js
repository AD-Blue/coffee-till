import React, { useContext } from 'react';
import { Flex, Text, ListItem, Heading, UnorderedList, Button } from '@chakra-ui/react';
import { numberWithCommas } from '../../utils/format';
import OrderItem from './OrderItem';
import { GlobalContext } from '../../Context/GlobalState';

export default function OrderCard({order}) {
    const { removeOrder } = useContext(GlobalContext);

    const handleClick = () => {
        removeOrder(order._id)
    }

    return (
        <ListItem w='350px'>
            <Flex border='2px' borderColor='brand.400' direction='column' ml='2%' mr='2%' p='2%'>
                <Heading color='brand.400' size='md' mb='16px'>
                    Order ID: {order._id}
                </Heading>
                <UnorderedList color='brand.400'>
                    {order.items.map((item) => (
                        <OrderItem key={item._id} item={item} />
                    )
                    )}
                </UnorderedList>
                <Text textAlign='right' mt='10%' fontSize='24px' color='brand.400'>Total: ${numberWithCommas(order.total.toFixed(2))}</Text>
                <Button colorScheme='teal' onClick={handleClick}>Refund</Button>
            </Flex>
        </ListItem>
    )
}
