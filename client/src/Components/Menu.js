import React from 'react';
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import MenuCard from './MenuCard';

export default function Menu() {
    return (
        <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(5, 1fr)" gap={10} w="45%">   {/* Change number of rows in the future to resize based on # of items in db */}
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
        </Grid>
    )
}
