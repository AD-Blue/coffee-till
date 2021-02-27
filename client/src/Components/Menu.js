import React from 'react';
import { Flex, Grid, SimpleGrid, Text, Box } from "@chakra-ui/react";
import MenuCard from './MenuCard';
import SizeBar from './SizeBar';

export default function Menu() {
    return (
        <Flex direction="column" w='100%'>
            <SizeBar />
            <SimpleGrid 
                columns={
                    [
                        3, 
                        3,
                        3,
                        4,
                        4, 
                        5
                    ]
                } 
                spacingX='5%'
                spacingY='5%'
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
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </SimpleGrid>
        </Flex>
    )
}
