import React, { useContext } from 'react';
import { Flex, Button, Spacer } from "@chakra-ui/react";
import {GlobalContext} from '../Context/GlobalState';

export default function Categories() {
    const {setSelection} = useContext(GlobalContext)
    const handleCoffees = () => {
        setSelection('coffees');
    }

    const handlePastries = () => {
        setSelection('pastries');
    }

    return (
        <Flex flexDirection="row" w="100%" bg="green" justify='space-around' pt='1%' pb='1%'>
            <Button onClick={handleCoffees}>
                Coffees
            </Button>
            <Button onClick={handlePastries}>
                Pastries
            </Button>
        </Flex>        
    )
}
