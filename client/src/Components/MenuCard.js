import React from 'react';
import { Flex, GridItem, Text } from "@chakra-ui/react";

export default function MenuCard({coffee}) {
    return (
        <GridItem 
            rowSpan={1} colSpan={1} 
            bg="tomato" 
            boxSize={
                "50px",
                "70px",
                "100px",
                null,
                null,
                "180px"
            }
        >
            <Flex justify="center" align="center" h="100%">
                <Text>
                    {coffee.name}
                </Text>
            </Flex>
        </GridItem>
    )
}
