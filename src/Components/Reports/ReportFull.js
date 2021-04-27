import React, { useContext, useEffect } from 'react';
import { Flex, Text, Heading, UnorderedList, Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import NavBar from '../NavBar';
import { GlobalContext } from '../../Context/GlobalState';
import ReportOrderCard from './ReportOrderCard';

export default function ReportFull() {
    const { getReport, report } = useContext(GlobalContext);
    const { id } = useParams();

    useEffect(() => {
        getReport(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <NavBar prev='/reports' />

            <Box ml='3%' mt='1%'>
                <Heading>
                    {report.createdAt}
                </Heading>
                
                <Text>
                    ID: {report._id}
                </Text>
                
            </Box>

            <Flex overflowX='scroll' h='100%' mt='3%'>
                <UnorderedList styleType='none'>
                    <Flex direction='row'>
                        {report.orders.slice(0).reverse().map((order) => (
                            <ReportOrderCard key={order._id} order={order} />
                        ))}
                    </Flex>
                </UnorderedList>
            </Flex>

        </Flex>
    )
}
