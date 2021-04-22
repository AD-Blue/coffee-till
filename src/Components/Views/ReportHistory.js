import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function ReportHistory() {
    return (
        <Flex direction='column' bg='brand.200' w='100%'>
            <Flex w='100%' bg='brand.100' pt='1%' pb='1%'>
                <Link to='/'>
                    <ArrowBackIcon w={8} h={8} ml='20%' color='brand.400' />
                </Link>
            </Flex>

            <Text>
                Reports
            </Text>
        </Flex>
    )
}
