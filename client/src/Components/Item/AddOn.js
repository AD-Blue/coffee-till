import React from 'react';
import { Text, Flex, Spacer } from "@chakra-ui/react"

export default function AddOn() {
    return (
        <Flex w="80%" ml="20%">
            <Text>Add-on name</Text>
            <Spacer />
            <Text>$add</Text>
        </Flex>
    )
}
