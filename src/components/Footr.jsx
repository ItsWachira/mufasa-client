import React from 'react';
import { Box, Container, Flex, Text, Link, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Footr() {
    return (
        <div>
          <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={10}>
      <Container as={Stack} maxW={'6xl'} spacing={4} align={'center'}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align={{ base: 'center', md: 'start' }}>
          <Stack align={'center'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Product
            </Text>
            <Link href={'#'}>Overview</Link>
            <Link href={'#'}>Features</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'center'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Company
            </Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'center'}>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>
          <Stack align={'center'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
              Follow Us
            </Text>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </Stack>
      </Container>
      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} mt={10} />
      <Box pt={10}>
        <Flex align={'center'} justify={'center'}>
          <div>Logo</div>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023. All rights reserved
        </Text>
      </Box>
    </Box>

        </div>
    );
}