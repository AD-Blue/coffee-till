import React, { useContext } from 'react';
import { Flex, Button } from "@chakra-ui/react";
import {GlobalContext} from '../Context/GlobalState';
import Navigation from './Navigation';

export default function Categories() {
    const {setSelection} = useContext(GlobalContext);

    const handleCoffees = () => {
        setSelection('coffees');
    }

    const handlePastries = () => {
        setSelection('pastries');
    }


    return (
        <Flex flexDirection="row" w="100%" bg="#25262e" justify='space-between' pt='1%' pb='1%' color='brand.400'>
            
            <Navigation />

            <Flex direction='row' justify='space-around' w='30%'>
                <Button 
                    onClick={handleCoffees} colorScheme="teal" variant="outline"
                >
                    Coffees
                </Button>
                <Button 
                    onClick={handlePastries} colorScheme="teal" variant="outline"
                >
                    Pastries
                </Button>
            </Flex>
            
        </Flex>        
    )
}
