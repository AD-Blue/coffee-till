import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Button, Spacer, Link,
    IconButton, useDisclosure, Input, Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import {GlobalContext} from '../Context/GlobalState';

export default function Categories() {
    const {setSelection} = useContext(GlobalContext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    const handleCoffees = () => {
        setSelection('coffees');
    }

    const handlePastries = () => {
        setSelection('pastries');
    }

    const handleCloseDay = () => {
        console.log(today)
    }

    return (
        <Flex flexDirection="row" w="100%" bg="green" justify='space-between' pt='1%' pb='1%'>
            <IconButton ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} ml='2%' />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Advanced</DrawerHeader>

                    <DrawerBody>
                        <Flex direction='column' h='100%'>
                            <Link as={RouterLink} to='/' mb='1rem'>Menu</Link>
                            <Link as={RouterLink} to='/orders' mb='1rem'>Order History</Link>
                            <Link as={RouterLink} to='/reports' mb='1rem'>Daily Reports</Link>
                            <Button mt='40%' onClick={handleCloseDay}>Close Day</Button>
                        </Flex>
                        
                    </DrawerBody>
                    
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            <Flex direction='row' justify='space-around' w='30%'>
                <Button onClick={handleCoffees}>
                    Coffees
                </Button>
                <Button onClick={handlePastries}>
                    Pastries
                </Button>
            </Flex>
            
        </Flex>        
    )
}
