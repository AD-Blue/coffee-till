import React from 'react';
import MenuCard from './MenuCard';
import { Flex, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";


export default function MenuGrid({transactions}) {
    return (
        <SimpleGrid 
                columns={
                    [3, 3, 3, 4, 4,  5]
                } 
                spacingX='5%'
                spacingY='2%'
                w="100%" p='2%'
                overflowY='scroll'
                bg={[
                    'yellow',
                    'green',
                    'blue',
                    'orange',
                    'purple',
                    'red']}
                css={{
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        background: 'red'
                    }
                }}
                h='100%'
            >
                {transactions.map((transaction) => (
                    <MenuCard key={transaction._id} transaction={transaction} />
                ))}
            </SimpleGrid>
    )
}
