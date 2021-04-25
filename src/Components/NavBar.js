import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function NavBar({ prev }) {
    return (
        <Flex w='100%' bg='brand.100' pt='1%' pb='1%'>
            <Link to={prev}>
                <ArrowBackIcon w={8} h={8} ml='20%' color='brand.400' />
            </Link>
        </Flex>
    )
}
