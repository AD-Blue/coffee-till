import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Flex, Button, Link,
    IconButton, useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Navigation() {
    const btnRef = React.useRef();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleCloseDay = () => {
        console.log(today)
    }

    return (
        <>
        <IconButton 
                ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} 
                ml='2%' colorScheme="teal" variant="outline" 
            />
        <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton color='brand.400' />
                    <DrawerHeader bg='brand.100' color='brand.400'>Advanced</DrawerHeader>

                    <DrawerBody bg='brand.200'>
                        <Flex direction='column' h='100%' color='brand.400'>
                            <Link as={RouterLink} to='/' mb='1rem'>Menu</Link>
                            <Link as={RouterLink} to='/orders' mb='1rem'>Order History</Link>
                            <Link as={RouterLink} to='/reports' mb='1rem'>Daily Reports</Link>
                            <Button mt='40%' onClick={handleCloseDay} colorScheme="teal" variant="outline">Close Day</Button>
                        </Flex>
                        
                    </DrawerBody>
                    
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
