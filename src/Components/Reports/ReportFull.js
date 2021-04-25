import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router';
import NavBar from '../NavBar';

export default function ReportFull() {
    const { id } = useParams();
    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <NavBar prev='/reports' />
            {id}
        </Flex>
    )
}
