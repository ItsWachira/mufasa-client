import React from 'react';
import { Link } from 'react-router-dom';



import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function Nav() {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      bg={'lightblue'} 
      p={4} 
      mb={4} 
      borderBottom={'1px solid #ccc'} 
    >
      
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          637-C
        </Text>
      </Box>

      
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>

      
      <Stack direction={'row'} spacing={4}>
      <Link to="/login"> <Button  colorScheme="teal" variant="outline"  >  Login </Button> </Link>
      <Link to="/registration">  <Button colorScheme="teal">Sign Up</Button></Link>
      </Stack>
    </Flex>
  );
}

function DesktopSubNav({ label, href, subLabel }) {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
}

const NAV_ITEMS = [
  {
    label: 'Learn',
    children: [
      {
        label: 'Explore your role',
        subLabel: 'Learning material',
        href: '#',
      }
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      }
    ],
  },
  {
    label: '637 Capital',
    children: [
        {
          label: 'Finances',
          subLabel: 'data',
          href: '#',
        }
      ],
   
  }
];
