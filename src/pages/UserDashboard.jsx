import React from 'react';
import {
  Box,
  Flex,
  Text,
  Spacer,
  ChakraProvider,
  extendTheme,
  useColorModeValue,
  Avatar,
  Button,
  Stack,
  Heading,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { HiHome, HiBookOpen, HiCog } from 'react-icons/hi';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'body',
        lineHeight: 'tall',
      },
    },
  },
});

const Sidebar = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.800')}
      w="200px"
      p="4"
      boxShadow="md"
      minH="100vh"
    >
      <Flex direction="column" align="center" justify="space-between">
        <Text fontWeight="bold" fontSize="lg" mb="4">
          637 Capital
        </Text>

        <Stack spacing="4">
          <MenuItem icon={<Icon as={HiHome} />} text="Home" />
          <MenuItem icon={<Icon as={HiBookOpen} />} text="Courses" />
          <MenuItem icon={<Icon as={HiCog} />} text="Settings" />
        </Stack>
      </Flex>
    </Box>
  );
};

const MenuItem = ({ icon, text }) => {
  return (
    <Flex align="center" cursor="pointer" _hover={{ color: 'blue.500' }}>
      {icon}
      <Text ml="2">{text}</Text>
    </Flex>
  );
};

const Header = () => {
  return (
    <Flex p="4" bg={useColorModeValue('blue.500', 'blue.700')} alignItems="center">
      <Text fontSize="2xl" color="white" fontWeight="bold">
        Learning Dashboard
      </Text>
      <Spacer />
      <Stack direction="row" alignItems="center">
        <Avatar size="sm" name="John Doe" src="https://placekitten.com/200/200" />
        <Text color="white" ml="2">
          John Doe
        </Text>
        <Button colorScheme="blue" size="sm" ml="4">
          Logout
        </Button>
      </Stack>
    </Flex>
  );
};

const LearningPath = () => {
    return (
      <Box p="4" flex="1">
        <Heading mb="4">My Learning Path</Heading>
        <Box
          borderWidth="1px"
          borderRadius="md"
          p="4"
          mb="4"
          boxShadow="md"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Text fontWeight="bold">Learning Path 1</Text>
          <Text>Agile Project Management Certification: Jane has experience in Project Management, but the job description specifically mentions the need for Agile Project Management experience. 
          She should look into obtaining her Agile Project Management certification.</Text>
          <Stack direction="row" mt="2" spacing="2" align="center">
            <Badge colorScheme="green">In Progress</Badge>
            <Spacer />
            <Text>50% completed</Text>
          </Stack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="md"
          p="4"
          mb="4"
          boxShadow="md"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
        >
          <Text fontWeight="bold">Learning Path 2</Text>
          <Text>Explore</Text>
          <Stack direction="row" mt="2" spacing="2" align="center">
            <Badge colorScheme="blue">Not Started</Badge>
            <Spacer />
            <Text>0% completed</Text>
          </Stack>
        </Box>
      </Box>
    );
  };

const UserDashboard = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Sidebar />

        <Box flex="1">
          <Header />
          <Flex p="4">
            <LearningPath />
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default UserDashboard;
