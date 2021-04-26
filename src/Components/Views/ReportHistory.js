import React, { useContext, useEffect } from 'react';
import { Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react';
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

            <Text>
                Reports
            </Text>
            <UnorderedList>
                <ListItem>
                    <Link to='/fullreport/123'>
                        <Text>PLACEHOLDER REPORT</Text>
                    </Link>
                    {reports.map((report) => (
                        <Link to={'/fullreport/' + report._id}>
                            <Text>{report.createdAt}</Text>
                        </Link>
                    ))}
                </ListItem>
            </UnorderedList>
        </Flex>
    )
}
