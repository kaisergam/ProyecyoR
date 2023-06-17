import {
  Flex,
  Text,
  Box,
  Image,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Stack,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

import logo from '../../../assets/images/logo.png';
import ModalInfo from '../ModalInfo/ModalInfo';
import mock from 'mock.json';

const primaryButtonStyles = {
  variant: 'ghost',
  colorScheme: 'whiteAlpha',
  marginRight: '4',
  _hover: { backgroundColor: 'gray.500', cursor: 'pointer' },
};

const secondaryButtonStyles = {
  variant: 'ghost',
  colorScheme: 'whiteAlpha',
  marginLeft: '4px',
  marginRight: '8px',
  transition: 'background-color 0.3s ease',
};

const phoneNumbers = [
  {
    name: 'Opción 1',
    link: 'https://wa.me/5491151332160',
  },
  {
    name: 'Opción 2',
    link: 'https://wa.me/5491163731723',
  },
  {
    name: 'Opción 3',
    link: 'https://wa.me/5491151142658',
  },
];

const facebookLink = 'https://www.facebook.com/profile.php?id=100087143880352';

const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1005);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleProductClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };
  const getWhatsappDropdownPosition = () => {
    if (isMobileView) {
      return { right: '-70px', left: 'auto' };
    }
    return { right: '-110px', left: 'auto' };
  };
  return (
    <>
      <Flex
        as="header"
        align="center"
        width="full"
        justify="space-between"
        bg="#1b1a1bf0"
        paddingTop="20px"
        paddingBottom="20px"
        position="relative"
        zIndex="1"
        margin="0 auto"
        direction={isMobileView ? 'column' : 'row'}
      >
        <Box
          display="flex"
          alignItems="center"
          marginBottom={isMobileView ? '2' : '0'}
          justifyContent={isMobileView ? 'center' : 'flex-start'}
          marginLeft={isMobileView ? '-40px' : '20px'}
        >
          <Image src={logo.src} alt="logo" width="12%" height="12%" />
          <Box marginLeft="2" fontWeight="bold" color="white">
            <Text
              bgGradient="linear-gradient(to right, rgba(38, 127, 205, 0.9), green.300)"
              bgClip="text"
              fontSize="30"
            >
              Almo.Cred
            </Text>
          </Box>
        </Box>
        <Box
          marginBottom={isMobileView ? '2' : '0'}
          marginTop={isMobileView ? '2' : '0'}
        >
          <Stack
            direction={isMobileView ? 'column' : 'row'}
            spacing={isMobileView ? 4 : 2}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  {...primaryButtonStyles}
                  zIndex="10"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="1.2rem"
                  color="white"
                  marginLeft={isMobileView ? '15px' : '-300px'}
                >
                  SERVICIOS
                </Button>
              </PopoverTrigger>
              <PopoverContent
                bg="white"
                width="100%"
                transform="translateX(-7.5%) scale(0.95)"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Box
                    zIndex="10"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    {mock.map((item) => (
                      <Box
                        key={item.id}
                        as="button"
                        p="2"
                        color="gray.800"
                        textAlign="center"
                        fontSize="1rem"
                        _hover={{ backgroundColor: 'gray.100' }}
                        display="block"
                        marginBottom="2"
                        onClick={() => handleProductClick(item.id)}
                        width="100%"
                      >
                        {item.segmento}
                      </Box>
                    ))}
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button
              {...primaryButtonStyles}
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1.2rem"
              color="white"
              marginBottom={{ base: '2', md: '0' }}
            >
              UBICACION
            </Button>
            <Button
              {...primaryButtonStyles}
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="1.2rem"
              color="white"
            >
              PREGUNTAS FRECUENTES
            </Button>
          </Stack>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            {...secondaryButtonStyles}
            as="a"
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="2.0rem"
            color="white"
            _hover={{
              backgroundColor: 'facebook.400',
              color: 'white',
            }}
          >
            <FaFacebook />
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button
                {...secondaryButtonStyles}
                fontSize="2.0rem"
                color="white"
                _hover={{
                  backgroundColor: 'whatsapp.500',
                  color: 'white',
                }}
              >
                <FaWhatsapp />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              bg="white"
              maxWidth="55%"
              {...getWhatsappDropdownPosition()}
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>
                {phoneNumbers.map((phone) => (
                  <Box
                    key={phone.name}
                    as="a"
                    href={phone.link}
                    display="block"
                    p="2"
                    color="gray.800"
                    textAlign="center"
                    fontSize="1rem"
                    _hover={{ backgroundColor: 'gray.100' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {phone.name}
                  </Box>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
      {selectedItemId && (
        <ModalInfo
          itemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
        />
      )}
    </>
  );
};

export default Navbar;
