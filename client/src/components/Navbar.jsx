import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    Icon,
    Text,
    useDisclosure,
    Button,
    Stack,
    useColorModeValue,
    useColorMode,
    
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link as ReactLink } from 'react-router-dom';
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';


  import { GiTechnoHeart } from 'react-icons/gi';
  
   
    
  const links = [
    { linkName: 'Products', path: '/products' },
    { linkName: 'Cart', path: '/cart' },
  ];
  
  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded='md'
      _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}>
      {children}
    </Link>
  );
  
  const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [isHovering, setIsHovering] = useState(false);
    
  
    
    return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
  
          <HStack>
           
              <Flex alignItems='center'>
              <Icon as={GiTechnoHeart} h={6} w={6} color={isHovering ? '#2F0F5D' : 'orange.400'} />
                <Text fontWeight='extrabold'>EverGlowy</Text>
              </Flex>
           
            <HStack as='nav' spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.linkName} path={link.path}>
                  {link.linkName}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <Icon
              cursor='pointer'
              mr='3'
              as={colorMode === 'light' ? MoonIcon : SunIcon}
              alignSelf='center'
              onClick={() => toggleColorMode()}
            />
           
                  
                    
              
                <Button as={ReactLink} to='/login' p={2} fontSize='sm' fontWeight={400} variant='link'>
                  Sign In
                </Button>
                <Button
                  as={ReactLink}
                  to='/register'
                  m={2}
                  display={{ base: 'none', md: 'inline-flex' }}
                  fontSize='sm'
                  fontWeight={600}
                  _hover={{ bg: 'orange.400' }}
                  bg='orange.500'
                  color='white'>
                  Sign Up
                </Button>{' '}
        
          
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as='nav' spacing={4}>
              {links.map((link) => (
                <NavLink key={link.linkName} path={link.path}>
                  {link.linkName}
                </NavLink>
              ))}
              <NavLink key='sign up' path='/register'>
                Sign Up
              </NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    );
  };
  
  export default Navbar;
  