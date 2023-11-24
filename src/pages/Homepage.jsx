import React  from 'react';
import Nav from '../components/Nav';
import Footr from '../components/Footr';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

import {
  FcAssistant,
  FcCollaboration,
} from 'react-icons/fc';

const Homepage = () => {
  return (
    <main>
      <Nav />
      <section className="Hero">
        <SplitScreenHero />
      </section>

      <section className="Features">
        <GridList />
      </section>
      <section className="Footer">
        <Footr />
      </section>
    </main>
  );
};

const SplitScreenHero = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={0} p={0}>
      <Flex p={0} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '20%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Learn
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Work on your  Dream Team
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Get started
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Image
        position={'relative'}
        alt={'hero Image'}
        objectFit={'cover'}
        src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
        borderRadius="md" 
        boxSize={{ base: '100vh', md: '68vh' }} 
      />
      </Flex>
    </Stack>
  );
};

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={'white'} >{heading}</Heading>
          <Text mt={1} fontSize={'sm'} color={'white'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

const GridList = () => {
  return (
    <Box p={4} bg={'blackAlpha.900'}  borderRadius="lg">
      <Stack spacing={5} as={Container} maxW={'6xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color={'white'}>
          Features
        </Heading>
        <Text color={'white'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Homepage;
