import React, { useContext, useEffect } from 'react';
import { Flex, Text, UnorderedList, ListItem, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { GlobalContext } from '../../Context/GlobalState';

export default function ReportHistory() {
    const { reports, getReports } = useContext(GlobalContext)

    useEffect(() => {
        getReports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <NavBar prev='/' />

            <Box ml='3%' mt='1%'>
                <Text fontSize='51px'>
                    Reports
                </Text>
                <UnorderedList>
                    {reports.map((report) => (
                        <ListItem>
                            <Link to={'/fullreport/' + report._id}>
                                <Text fontSize='26px'>
                                    {report.createdAt}
                                </Text>
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Flex>
    )
}
