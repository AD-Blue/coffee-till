import React from 'react'
import { Flex, Button, Spacer } from "@chakra-ui/react";

export default function SizeBar() {
    return (
        <Flex flexDirection="row" w="100%" bg="green" alignContent="space-between">
            <Spacer />
            <Button>
                S
            </Button>
            <Spacer />
            <Button>
                M
            </Button>
            <Spacer />
            <Button>
                L
            </Button>
            <Spacer />
        </Flex>        
    )
}
