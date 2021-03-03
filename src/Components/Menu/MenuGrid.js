import React from 'react';
import MenuCard from './MenuCard';
import { SimpleGrid } from "@chakra-ui/react";


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
                bg='#3b3c47'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '12px',
                        background: '#3b3c47'
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
