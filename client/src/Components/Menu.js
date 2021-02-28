import React, { useContext, useEffect } from 'react';
import { Flex, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Categories from './Categories';
import MenuGrid from './MenuGrid';
import {GlobalContext} from '../Context/GlobalState';

export default function Menu() {
    const { coffees, getCoffees, pastries, getPastries, pastry, getPastry, coffee, getCoffee, selection } = useContext(GlobalContext);

    useEffect(() => {
        getCoffees();
        getPastries();
        getPastry('603afe070d27725698cef0e7');
        getCoffee('603af4a843068f43d8f065e2');
    }, []);

    console.log(selection)
    let content = null;

    if (selection == 'coffees'){
        content = <MenuGrid items={coffees} />
    }
    else if (selection == 'pastries'){
        content = <MenuGrid items={pastries} />
    }


    return (
        <Flex direction="column" w='100%'>
            <Categories />
            {content}
        </Flex>
    )
}
