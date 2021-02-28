import React, { useContext } from 'react';
import { Flex, GridItem, Text, Button,
    Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody 
} from "@chakra-ui/react";
import {GlobalContext} from '../Context/GlobalState';

export default function MenuCard({item}) {
    const {selection} = useContext(GlobalContext);

    const handleClick = () => {
        console.log(`This is a ${selection} item`)
    }

    let content = null;

    if (selection == 'coffees') {
        content = <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Select a size</PopoverHeader>
        <PopoverBody>
            <Flex  justify="space-between" direction="row">
                <Button>
                    Small
                </Button>
                <Button>
                    Medium
                </Button>
                <Button>
                    Large
                </Button>
            </Flex>
            
        </PopoverBody>
   </PopoverContent>
    }

    return (
        <Popover>
            <PopoverTrigger>
                <GridItem 
                    as="button"
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
                    onClick={handleClick}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _active={{
                        bg: "#037ef3",
                        transform: "scale(0.98)",
                        borderColor: "#037ef3",
                    }}
                    _focus={{
                        boxShadow:
                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                >
                    <Flex justify="center" align="center" h="100%">
                        <Text>
                            {item.name}
                        </Text>
                    </Flex>
                </GridItem> 
            </PopoverTrigger>
           {content}
        </Popover>
        
    )
}
