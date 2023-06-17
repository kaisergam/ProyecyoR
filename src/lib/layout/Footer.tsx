import {
  Box,
  Text,
  useDisclosure,
  Button,
  Heading,
  ListItem,
  Modal,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';
import ModalInfo from '../components/ModalInfo/ModalInfo';
import mock from 'mock.json';

const primaryButtonStyles = {
  variant: 'ghost',
  colorScheme: 'whiteAlpha',
  marginRight: '4',
  _hover: { backgroundColor: 'gray.500', cursor: 'pointer' },
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

const Footer = () => {
  const getWhatsappDropdownPosition = () => {
    // if (isMobileView) {
    //   return { right: '-70px', left: 'auto' };
    // }
    return { right: 'auto', left: '70px' };
  };
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const {
    isOpen: isOpenModal1,
    onOpen: onOpenModal1,
    onClose: onCloseModal1,
  } = useDisclosure();
  const {
    isOpen: isOpenModal2,
    onOpen: onOpenModal2,
    onClose: onCloseModal2,
  } = useDisclosure();
  const {
    isOpen: isOpenModal3,
    onOpen: onOpenModal3,
    onClose: onCloseModal3,
  } = useDisclosure();
  const handleProductClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  const facebookLink =
    'https://www.facebook.com/profile.php?id=100087143880352';

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
          <Image
            src={logo.src}
            width={isMobileView ? '50%' : '51%'}
            height={isMobileView ? '50%' : '51%'}
          />
          <Text
            bgGradient="linear-gradient(to-r, rgba(38, 127, 205, 0.9), green.300)"
            bgClip="text"
          >
            Almo.Cred
          </Text>
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
                  style={{
                    color: 'white',
                  }}
                  marginBottom={{ base: '2', md: '0' }}
                  {...primaryButtonStyles}
                >
                  Servicios
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
              onClick={onOpenModal3}
              {...primaryButtonStyles}
              style={{
                color: 'white',
              }}
            >
              Sobre Nosotros
            </Button>
            <Button
              {...primaryButtonStyles}
              onClick={onOpenModal3}
              style={{
                color: 'white',
              }}
            >
              Preguntas Frecuentes
            </Button>
            <Button
              onClick={onOpenModal1}
              {...primaryButtonStyles}
              style={{
                color: 'white',
              }}
            >
              Términos y Condiciones
            </Button>

            <Button
              onClick={onOpenModal2}
              {...primaryButtonStyles}
              style={{
                color: 'white',
              }}
            >
              Política y Privacidad
            </Button>
            <Box display="flex" justifyContent="flex-end">
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
                    marginRight="45px"
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
          </Box>
        </Flex>
      </Flex>
      <Box bg="#494846" py={1}>
        <Text textAlign="center" mt={1} fontSize="sm" color="white">
          &copy;El otorgamiento del crédito se encuentra sujeto a calificación
          crediticia y condiciones de contratación de cada entidad financiera en
          particular, a la cual el cliente pueda acceder, conforme a su
          historial crediticio y afectación disponible vigente al momento de la
          evaluación. En caso de otorgarse el crédito personal, el monto, el
          plazo, la tasa de interés y demás condiciones, serán establecidos por
          la entidad financiera, de acuerdo a las posibilidades del cliente,
          conforme a su situación financiera, antecedentes crediticios,
          afectación disponible vigente al momento de la evaluación y a las
          políticas de crédito de la misma, en función del resultado que arroje
          dicha calificación efectuada sobre la base de sus políticas de
          crédito. Ejemplo de un crédito personal en pesos, por descuento de
          haberes, Decreto 14/2012, para clientes premium, que califiquen para
          esta línea de crédito, sujeto a las políticas de crédito de cada
          entidad financiera y a afectación disponible vigente correspondiente
          al certificado de haberes otorgado por cada organismo en particular al
          cual pertenezca cada cliente al momento del otorgamiento. Para acceder
          a dicha línea de crédito como clientes premium, los solicitantes
          deberán registrar un normal cumplimiento de sus obligaciones
          financieras. Monto máximo, 4.400.000, monto mínimo 10.000, plazo
          máximo 72 meses, plazo mínimo 18 meses, ejemplo para un crédito
          personal de 100.000 en 18 meses, valor de cuota 10.345,48, ejemplo
          para un crédito personal de 100.000 en 24 meses, valor de cuota
          9.150,51, ejemplo para un crédito personal de 100.000 en 30 meses,
          valor de cuota 8.515,27,ejemplo para un crédito personal de 100.000 en
          36 meses, valor de cuota 8.149,86, ejemplo para un crédito personal de
          100.000 en 42 meses, valor de cuota 7.930,08,ejemplo para un crédito
          personal de 100.000 en 48 meses, valor de cuota 7.794,33, ejemplo para
          un crédito personal de 100.000 en 60 meses, valor de cuota 7.655,03,
          ejemplo para un crédito personal de 100.000 en 72 meses, valor de
          cuota 7.598,38. Para todos los planes: T.N.A: 76,00%. CFT: 91,95%,
          TEA: 109,01%, CFT: 142,66%. Los valores expuestos son estimativos y no
          tienen carácter contractual. Todos los costos de los planes aquí
          detallados son solamente a título informativo, no constituyen una
          oferta y pueden variar al momento de solicitarlos sin previo aviso.
          Asimismo, están sujetos a políticas de mercado y/o internas de cada
          entidad. Los enlaces a sitios web y otros canales de contacto se
          muestran y/o facilitan únicamente a título informativo, no implican
          responsabilidad respecto de sus contenidos y atención, ni garantías de
          ningún tipo quedando las mismas sujetas a las políticas de cada
          entidad. Copyright 2023 - AlmoCred
        </Text>
      </Box>
      <Modal isOpen={isOpenModal1} onClose={onCloseModal1}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Términos y Condiciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" marginBottom="4">
              Términos y Condiciones de AlmoCred
            </Heading>
            Estos términos y condiciones rigen el uso de los servicios
            proporcionados por AlmoCred a través de nuestro sitio web,
            aplicaciones móviles u otros canales de comunicación. Al acceder y
            utilizar nuestros servicios, aceptas cumplir y estar sujeto a estos
            T&C. Si no estás de acuerdo con alguno de los términos, te
            recomendamos que no utilices nuestros servicios.
            <Heading size="md" marginBottom="4" marginTop="4">
              Uso de los servicios:
            </Heading>
            <OrderedList>
              <ListItem marginBottom="1">
                AlmoCred ofrece servicios de financiamiento y crédito, y el uso
                de nuestros servicios está sujeto a tu cumplimiento de los
                requisitos establecidos por AlmoCred, así como a la aprobación
                de tu solicitud.
              </ListItem>
              <ListItem marginBottom="1">
                Al utilizar nuestros servicios, te comprometes a proporcionar
                información precisa, actualizada y completa sobre ti y a
                mantenerla actualizada en todo momento.
              </ListItem>
              <ListItem>
                Aceptas utilizar nuestros servicios únicamente con fines legales
                y de acuerdo con estos T&C, así como con todas las leyes y
                regulaciones aplicables.
              </ListItem>
            </OrderedList>
            <Heading size="md" marginBottom="4" marginTop="4">
              Propiedad intelectual:
            </Heading>
            <OrderedList>
              <ListItem marginBottom="1">
                Todos los derechos de propiedad intelectual relacionados con
                nuestros servicios, incluyendo pero no limitándose a marcas
                comerciales, logotipos, textos, gráficos, imágenes, videos y
                software, son propiedad exclusiva de AlmoCred. No se te otorga
                ningún derecho de propiedad sobre dichos contenidos.
              </ListItem>
              <ListItem>
                Queda estrictamente prohibida la reproducción, distribución,
                modificación o cualquier otro uso no autorizado de los
                contenidos sin el consentimiento previo por escrito de AlmoCred.
              </ListItem>
            </OrderedList>
            <Heading as="h2" size="md" mt={4} mb={2}>
              Limitación de responsabilidad:
            </Heading>
            <OrderedList>
              <ListItem marginBottom="1">
                AlmoCred no se hace responsable de ninguna pérdida, daño o
                perjuicio, ya sea directo, indirecto, incidental o consecuente,
                que pueda surgir del uso o la incapacidad de utilizar nuestros
                servicios.
              </ListItem>
              <ListItem>
                Nos esforzamos por mantener nuestros servicios disponibles de
                manera continua y segura, pero no podemos garantizar que el
                acceso sea ininterrumpido o libre de errores. Además, no nos
                responsabilizamos por cualquier daño causado por virus
                informáticos u otros elementos perjudiciales durante el uso de
                nuestros servicios.
              </ListItem>
            </OrderedList>
            <Heading size="md" marginBottom="4" marginTop="4">
              Limitación de responsabilidad:
            </Heading>
            <OrderedList>
              <ListItem marginBottom="1">
                AlmoCred no se hace responsable de ninguna pérdida, daño o
                perjuicio, ya sea directo, indirecto, incidental o consecuente,
                que pueda surgir del uso o la incapacidad de utilizar nuestros
                servicios.
              </ListItem>
              <ListItem>
                Nos esforzamos por mantener nuestros servicios disponibles de
                manera continua y segura, pero no podemos garantizar que el
                acceso sea ininterrumpido o libre de errores. Además, no nos
                responsabilizamos por cualquier daño causado por virus
                informáticos u otros elementos perjudiciales durante el uso de
                nuestros servicios.
              </ListItem>
            </OrderedList>
            <Heading size="md" marginBottom="4" marginTop="4">
              Privacidad y protección de datos:
            </Heading>
            El uso de la información personal que recopilamos se rige por
            nuestra Política de Privacidad. Te recomendamos que revises dicha
            política para comprender cómo recopilamos, utilizamos y protegemos
            tu información personal.
            <Heading size="md" marginBottom="4" marginTop="4">
              Modificaciones de los T&C:
            </Heading>
            AlmoCred se reserva el derecho de modificar estos T&C en cualquier
            momento. Cualquier cambio será efectivo desde el momento de su
            publicación en nuestros canales de comunicación. Te recomendamos que
            revises periódicamente los T&C para estar al tanto de cualquier
            modificación.
            <Heading size="md" marginBottom="4" marginTop="4">
              Ley aplicable y jurisdicción:
            </Heading>
            Estos T&C se regirán e interpretarán de acuerdo con las leyes de
            Argentina. Cualquier disputa que surja en relación con estos T&C
            estará sujeta a la jurisdicción exclusiva de los tribunales de
            Argentina. Si tienes alguna pregunta o inquietud sobre estos T&C,
            por favor contáctanos a través de [correo electrónico de contacto].
            Fecha de entrada en vigencia: [fecha de entrada en vigencia de los
            T&C]
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal1}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal2} onClose={onCloseModal2}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Politicas y Privacidad</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" marginBottom="4">
              Política de Privacidad de AlmoCred
            </Heading>
            En AlmoCred, nos comprometemos a proteger y respetar tu privacidad.
            Esta política de privacidad establece cómo recopilamos, usamos y
            protegemos la información personal que puedas proporcionarnos a
            través de nuestro sitio web, aplicaciones móviles u otros canales de
            comunicación. Al acceder y utilizar nuestros servicios, aceptas las
            prácticas descritas en esta política de privacidad.
            <Heading size="md" marginBottom="4" marginTop="4">
              Información que recopilamos:{' '}
            </Heading>
            Recopilamos la información personal que nos proporcionas
            voluntariamente, como tu nombre, dirección de correo electrónico,
            número de teléfono y cualquier otra información que elijas
            proporcionarnos al interactuar con nosotros.
            <Heading size="md" marginBottom="4" marginTop="4">
              Uso de la información recopilada:{' '}
            </Heading>
            Utilizamos la información que recopilamos para los siguientes
            propósitos:
            <OrderedList>
              <ListItem marginBottom="1" marginTop="2">
                Procesar y gestionar tus solicitudes de productos o servicios.
              </ListItem>
              <ListItem marginBottom="1">
                Proporcionar asistencia al cliente y responder a tus consultas.
              </ListItem>
              <ListItem marginBottom="1">
                Personalizar y mejorar tu experiencia al utilizar nuestros
                servicios.
              </ListItem>
              <ListItem marginBottom="1">
                Enviar comunicaciones de marketing y promocionales relacionadas
                con nuestros productos y servicios, siempre y cuando hayas dado
                tu consentimiento previo.
              </ListItem>
              <ListItem marginBottom="1">
                Cumplir con nuestras obligaciones legales y regulatorias.
              </ListItem>
            </OrderedList>
            <Heading size="md" marginBottom="4" marginTop="4">
              Divulgación de información:{' '}
            </Heading>
            No vendemos, alquilamos ni compartimos tu información personal con
            terceros para fines de marketing directo sin tu consentimiento
            explícito. Sin embargo, podemos compartir tu información con
            terceros en las siguientes circunstancias:{' '}
            <OrderedList styleType="decimal">
              <ListItem marginBottom="1" marginTop="2">
                Con proveedores de servicios y socios comerciales que nos ayudan
                a brindar nuestros productos y servicios.
              </ListItem>
              <ListItem marginBottom="1">
                Para cumplir con las leyes aplicables, regulaciones
                gubernamentales, órdenes judiciales o procesos legales.
              </ListItem>
              <ListItem marginBottom="1">
                Para proteger nuestros derechos, propiedad o seguridad, así como
                los derechos, propiedad o seguridad de nuestros usuarios u
                otros.
              </ListItem>
            </OrderedList>
            <Heading size="md" marginBottom="4" marginTop="4">
              Seguridad de la información:{' '}
            </Heading>
            Implementamos medidas de seguridad adecuadas para proteger tu
            información personal contra el acceso no autorizado, la alteración,
            la divulgación o la destrucción. Sin embargo, ten en cuenta que
            ninguna transmisión de datos por Internet o cualquier otra red puede
            garantizar ser 100% segura.
            <Heading size="md" marginBottom="4" marginTop="4">
              Tus derechos:{' '}
            </Heading>
            Tienes derecho a acceder, corregir, actualizar o eliminar la
            información personal que tenemos sobre ti. Si deseas ejercer estos
            derechos, ponte en contacto con nosotros utilizando los detalles de
            contacto que se proporcionan al final de esta política de
            privacidad.
            <Heading size="md" marginBottom="4" marginTop="4">
              Cambios en la política de privacidad:{' '}
            </Heading>
            Podemos actualizar esta política de privacidad de vez en cuando para
            reflejar cambios en nuestras prácticas de privacidad. Te
            recomendamos que revises periódicamente esta política para estar al
            tanto de cualquier cambio.
            <Heading size="md" marginBottom="4" marginTop="4">
              Contacto:{' '}
            </Heading>
            Si tienes alguna pregunta, inquietud o solicitud relacionada con
            esta política de privacidad, puedes comunicarte con nosotros a
            través de los siguientes medios: - Nombre de la empresa: AlmoCred -
            Dirección: [Dirección de la empresa] - Correo electrónico: [Correo
            electrónico de contacto] - Teléfono: [Número de teléfono de
            contacto]
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal2}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal3} onClose={onCloseModal3}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lorem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" marginBottom="4">
              Lorem
            </Heading>
            Lorem ipsum
            <Heading size="md" marginBottom="4" marginTop="4">
              Lorem
            </Heading>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              cupiditate fugit modi, magnam dicta aut voluptatibus voluptate
              dignissimos et tenetur est! Ab error ullam consectetur,
              perspiciatis facilis nihil blanditiis mollitia.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal1}>
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
