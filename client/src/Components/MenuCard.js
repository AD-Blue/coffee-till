import React from 'react';
import { Flex, GridItem, Text } from "@chakra-ui/react";

export default function MenuCard() {
    return (
        <GridItem rowSpan={1} colSpan={1} bg="tomato" boxSize="125px">
            <Flex justify="center" align="center" h="100%">
                <Text>
                    Placeholder Item
                </Text>
            </Flex>
        </GridItem>
    )
}
