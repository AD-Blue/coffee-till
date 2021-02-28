import React from 'react';
import MenuCard from './MenuCard';
import { Flex, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";


export default function MenuGrid({items}) {
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
                {items.map((item) => (
                    <MenuCard key={item._id} item={item} />
                ))}
            </SimpleGrid>
    )
}
