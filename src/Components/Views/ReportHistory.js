import React from 'react';
import { Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

export default function ReportHistory() {
    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <NavBar prev='/' />

            <Text>
                Reports
            </Text>
            <UnorderedList>
                <ListItem>
                    <Link to='/fullreport/123'>
                        <Text>04/25/2021</Text>
                    </Link>
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}
