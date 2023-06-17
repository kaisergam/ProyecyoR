import {
  Box,
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaInstagram, FaSpotify } from 'react-icons/fa';

import ModalInfo from '../components/ModalInfo/ModalInfo';

const primaryButtonStyles = {
  variant: 'ghost',
  colorScheme: 'whiteAlpha',
  marginRight: '4',
  _hover: { backgroundColor: 'gray.500', cursor: 'pointer' },
};

const Footer = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const number = {
    number: 'https://wa.me/5491136347996',
  };
  const phoneNumbers = [
    {
      name: 'Para empresas',
      link: number.number,
    },
    {
      name: 'Para artistas',
      link: number.number,
    },
    {
      name: 'Para mi publico <3',
      link: number.number,
    },
  ];
  const getWhatsappDropdownPosition = () => {
    if (isMobileView) {
      return { right: '-70px', left: 'auto' };
    }
    return { right: '-80px', left: 'auto' };
  };
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
  const {
    isOpen: isOpenModal3,
    onOpen: onOpenModal3,
    onClose: onCloseModal3,
  } = useDisclosure();
  const InstaLink = 'https://www.instagram.com/rhanela.cf/';
  const SpotyLink = 'https://open.spotify.com/artist/1o77UQxjJ52CB2oEIjNc3O';

  const secondaryButtonStyles = {
    variant: 'ghost',
    colorScheme: 'whiteAlpha',
    marginRight: '4',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <Flex as="footer" bg="#1b1a1b" py={1} justifyContent="space-around">
        <Box
          fontSize="2xl"
          fontWeight="bold"
          position="relative"
          color="white"
          marginBottom={{ base: '4', md: '0' }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
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

        <Flex>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  {...primaryButtonStyles}
                  zIndex="10"
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                  marginLeft={isMobileView ? '15px' : '0px'}
                >
                  Contacto
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
            <Button
              onClick={onOpenModal3}
              {...primaryButtonStyles}
              style={{
                color: 'white',
              }}
            >
              Sobre mi
            </Button>
            <Button
              {...primaryButtonStyles}
              as="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              marginBottom={{ base: '2', md: '0' }}
            >
              Proximos eventos
            </Button>
            <Box display="flex" justifyContent="flex-end">
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
            </Box>
          </Box>
        </Flex>
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

export default Footer;
