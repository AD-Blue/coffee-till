import React, { useContext, useEffect } from 'react';
import { Flex, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Categories from './Categories';
import MenuGrid from './MenuGrid';
import {GlobalContext} from '../Context/GlobalState';

export default function Menu() {
    const { coffees, getCoffees, pastries, getPastries, selection, getItems } = useContext(GlobalContext);

    useEffect(() => {
        getCoffees();
        getPastries();
        getItems();
    }, []);

    console.log(selection);

    let content = null;

    if (selection == 'coffees'){
        content = <MenuGrid transactions={coffees} />
    }
    else if (selection == 'pastries'){
        content = <MenuGrid transactions={pastries} />
    }


    return (
        <Flex direction="column" w='100%'>
            <Categories />
            {content}
        </Flex>
    )
}
