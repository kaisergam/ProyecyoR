import {
  Flex,
  Text,
  Box,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaInstagram, FaSpotify } from 'react-icons/fa';

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

const InstaLink = 'https://www.instagram.com/rhanela.cf/';
const SpotyLink = 'https://open.spotify.com/artist/1o77UQxjJ52CB2oEIjNc3O';

const Navbar = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const {
    isOpen: isOpenModal3,
    onOpen: onOpenModal3,
    onClose: onCloseModal3,
  } = useDisclosure();

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
          <Box
            marginLeft="2"
            fontWeight="bold"
            color="white"
            marginRight={isMobileView ? '-40px' : '-50px'}
          >
            <Box
              backgroundColor="white"
              display="inline-block"
              px="2"
              py="1"
              borderRadius="50px"
            >
              <Text
                bgGradient="linear-gradient(to right, #f51168, #080708)"
                bgClip="text"
                fontSize="30"
              >
                Rhanela
              </Text>
            </Box>
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
            <Button
              onClick={onOpenModal3}
              {...primaryButtonStyles}
              fontSize="1.2rem"
              style={{
                color: 'white',
              }}
            >
              SOBRE MI
            </Button>
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
                  CONTACTO
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
              PROXIMOS EVENTOS
            </Button>
          </Stack>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            {...secondaryButtonStyles}
            as="a"
            href={SpotyLink}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="2.0rem"
            color="white"
            _hover={{
              backgroundColor: 'green.400',
              color: 'white',
            }}
          >
            <FaSpotify />
          </Button>
          <Button
            {...secondaryButtonStyles}
            as="a"
            href={InstaLink}
            target="_blank"
            rel="noopener noreferrer"
            fontSize="2.0rem"
            color="white"
            _hover={{
              bgGradient:
                'linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
              color: 'white',
            }}
          >
            <FaInstagram />
          </Button>
          {/* <Popover>
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
          </Popover> */}
        </Box>
      </Flex>
      <Modal isOpen={isOpenModal3} onClose={onCloseModal3}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Quien es Rhanela?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Rhanela es una artista, compositora y cantante argentina. Despertó
              su pasión por la música a muy corta edad lo que la llevó a tomar
              clases de danzas cuando tenia tan solo 3 años. Luego de explorar
              tantos ritmos bailando, descubrió su pasión por el canto, la
              guitarra, el piano y la composición musical. Nunca dejó de
              estudiar música por lo que se fue nutriendo de diferentes estilos.
              Tal vez su historia es lo que lleva a Rhanela a tener un estilo
              tan definido y propio. Innovando con un sonido fresco en distintos
              ritmos. Esta joven artista trabaja de manera constante en temas
              nuevos y shows propios, y promete mucho a futuro.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal3}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
