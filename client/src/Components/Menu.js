import React, { useContext, useEffect } from 'react';
import { Flex, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SizeBar from './SizeBar';
import MenuGrid from './MenuGrid';
import {GlobalContext} from '../Context/GlobalState';

export default function Menu() {
    const { coffees, getCoffees, pastries, getPastries, pastry, getPastry  } = useContext(GlobalContext);

    useEffect(() => {
        getCoffees();
        getPastries();
        getPastry('603afe070d27725698cef0e7');
    }, []);

    console.log(pastries)

    return (
        <Flex direction="column" w='100%'>

            <SizeBar />
            <MenuGrid items={coffees} />
        </Flex>
    )
}
