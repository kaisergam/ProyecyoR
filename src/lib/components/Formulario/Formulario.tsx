import {
  Input,
  Button,
  Checkbox,
  Select,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import axios from 'axios';
import type React from 'react';
import { useState, useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import mock from 'mock.json';

type FormData = {
  nombre: string;
  apellido: string;
  dni: string;
  email: string;
  celular: string;
  aceptarTerminos: boolean;
  // revisar estos dos campos
  sexo: string;
  opciones: string;
  segmento: string;
  organismo: string;
};

const sendEmail = async (formData: FormData) => {
  const apiKey =
    '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';
  const url = 'https://api.sendgrid.com/v3/mail/send';

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const emailData = {
    personalizations: [
      {
        to: [
          {
            email: 'ruusiitooc@gmail.com', // Reemplaza con la dirección de correo electrónico a la que deseas enviar el mensaje
          },
        ],
        subject: 'Nuevo formulario enviado',
      },
    ],
    from: {
      email: 'facundo.barbeito17@gmail.com', // Reemplaza con la dirección de correo electrónico que se utilizará como remitente
    },
    content: [
      {
        type: 'text/plain',
        value: `Nombre: ${formData.nombre}\nApellido: ${formData.apellido}\nDNI: ${formData.dni}\nSexo: ${formData.sexo}\nEmail: ${formData.email}\nCelular: ${formData.celular}`,
      },
    ],
  };

  await axios.post(url, emailData, { headers });
};

const Formulario = () => {
  const [selectedSegmento, setSelectedSegmento] = useState('');
  const [selectedOrganismo, setSelectedOrganismo] = useState('');
  const [isSelectEnabled, setIsSelectEnabled] = useState(false);

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

  /*
  const handleSegmentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const segmento = e.target.value;
    setSelectedSegmento(segmento);
    setSelectedOrganismo('');
    setIsSelectEnabled(segmento !== 'Ver todos');
  };
  */
  useEffect(() => {
    if (selectedSegmento !== 'Ver todos') {
      setSelectedOrganismo('');
    }
  }, [selectedSegmento]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    sendEmail(data);
  };

  const [formData] = useState<FormData>({
    nombre: '',
    apellido: '',
    dni: '',
    sexo: '',
    email: '',
    celular: '',
    segmento: '',
    organismo: '',
    opciones: '',
    aceptarTerminos: false,
  });

  const LabelColor = { color: 'rgba(38, 127, 205, 0.9)' };

  return (
    <>
      <Text
        fontSize="3xl"
        fontWeight="bold"
        color="rgba(38, 127, 205, 0.9)"
        marginBottom="4"
      >
        Contacto
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Nombre * </b>
          </Text>
          <Input
            isRequired
            id="nombre"
            className="mt-2"
            isInvalid={errors.nombre != null}
            errorBorderColor="red.300"
            {...register('nombre', { required: true })}
            value={formData.nombre}
          />
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Apellido * </b>
          </Text>
          <Input
            isRequired
            id="apellido"
            className="mt-2"
            isInvalid={errors.apellido != null}
            errorBorderColor="red.300"
            {...register('apellido', { required: true })}
            value={formData.apellido}
          />
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> DNI * </b>
          </Text>
          <Input
            type="number"
            isRequired
            id="dni"
            className="mt-2"
            isInvalid={errors.dni != null}
            errorBorderColor="red.300"
            {...register('dni', { required: true, pattern: /^\d{7,9}$/ })}
            value={formData.dni}
          />
          {errors.dni && (
            <span style={{ color: 'red' }}>
              Ingresa un numero de DNI válido
            </span>
          )}
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Sexo * </b>
          </Text>
          <Select
            isRequired
            id="sexo"
            className="mt-2"
            isInvalid={errors.sexo != null}
            errorBorderColor="red.300"
            {...register('sexo', { required: true })}
          >
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </Select>
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Email * </b>
          </Text>
          <Input
            isRequired
            id="email"
            className="mt-2"
            isInvalid={errors.email != null}
            errorBorderColor="red.300"
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
            })}
            name="email"
            value={formData.email}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>Ingresa un email válido</span>
          )}
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Celular * </b>
          </Text>
          <Input
            type="number"
            isRequired
            id="celular"
            className="mt-2"
            isInvalid={errors.celular != null}
            errorBorderColor="red.300"
            {...register('celular', { required: true, pattern: /^\d{10}$/ })}
            name="celular"
            value={formData.celular}
          />
          {errors.celular && (
            <span style={{ color: 'red' }}>
              Ingresa un número de teléfono válido
            </span>
          )}
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Segmento * </b>
          </Text>
          <Select
            isRequired
            id="segmento"
            className="mt-2"
            isInvalid={errors.opciones != null}
            errorBorderColor="red.300"
            value={selectedSegmento}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedSegmento(e.target.value);
              setSelectedOrganismo('');
              setIsSelectEnabled(e.target.value !== '');
            }}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="Ver todos">Ver todos</option>
            {mock.map((item) => (
              <option key={item.id} value={item.segmento}>
                {item.segmento}
              </option>
            ))}
          </Select>
        </div>

        <div className="my-4">
          <Text className="font-bold" style={LabelColor}>
            <b> Organismo * </b>
          </Text>
          <Select
            isRequired
            id="organismo"
            className="mt-2"
            isInvalid={errors.opciones != null}
            errorBorderColor="red.300"
            disabled={!isSelectEnabled}
            value={selectedOrganismo}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSelectedOrganismo(e.target.value)
            }
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {selectedSegmento === 'Ver todos' && (
              <>
                {mock.map((item) =>
                  item.organismos.map((organismo) => (
                    <option key={crypto.randomUUID()} value={organismo}>
                      {organismo}
                    </option>
                  ))
                )}
              </>
            )}
            {selectedSegmento !== '' && selectedSegmento !== 'Ver todos' && (
              <>
                {mock
                  .filter((item) => item.segmento === selectedSegmento)
                  .map((item) =>
                    item.organismos.map((organismo) => (
                      <option key={crypto.randomUUID()} value={organismo}>
                        {organismo}
                      </option>
                    ))
                  )}
              </>
            )}
          </Select>
        </div>

        <br />

        <Checkbox
          isRequired
          {...register('aceptarTerminos')}
          style={{ marginTop: '10px' }}
        >
          Aceptar términos y condiciones *
        </Checkbox>

        <Button
          onClick={onOpenModal1}
          style={{
            marginLeft: '15px',
            marginTop: '3px',
          }}
          variant="unstyled"
        >
          <u>Leer</u>
        </Button>

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
              utilizar nuestros servicios, aceptas cumplir y estar sujeto a
              estos T&C. Si no estás de acuerdo con alguno de los términos, te
              recomendamos que no utilices nuestros servicios.
              <Heading size="md" marginBottom="4" marginTop="4">
                Uso de los servicios:
              </Heading>
              <OrderedList>
                <ListItem marginBottom="1">
                  AlmoCred ofrece servicios de financiamiento y crédito, y el
                  uso de nuestros servicios está sujeto a tu cumplimiento de los
                  requisitos establecidos por AlmoCred, así como a la aprobación
                  de tu solicitud.
                </ListItem>
                <ListItem marginBottom="1">
                  Al utilizar nuestros servicios, te comprometes a proporcionar
                  información precisa, actualizada y completa sobre ti y a
                  mantenerla actualizada en todo momento.
                </ListItem>
                <ListItem>
                  Aceptas utilizar nuestros servicios únicamente con fines
                  legales y de acuerdo con estos T&C, así como con todas las
                  leyes y regulaciones aplicables.
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
                  contenidos sin el consentimiento previo por escrito de
                  AlmoCred.
                </ListItem>
              </OrderedList>
              <Heading as="h2" size="md" mt={4} mb={2}>
                Limitación de responsabilidad:
              </Heading>
              <OrderedList>
                <ListItem marginBottom="1">
                  AlmoCred no se hace responsable de ninguna pérdida, daño o
                  perjuicio, ya sea directo, indirecto, incidental o
                  consecuente, que pueda surgir del uso o la incapacidad de
                  utilizar nuestros servicios.
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
                  perjuicio, ya sea directo, indirecto, incidental o
                  consecuente, que pueda surgir del uso o la incapacidad de
                  utilizar nuestros servicios.
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
              publicación en nuestros canales de comunicación. Te recomendamos
              que revises periódicamente los T&C para estar al tanto de
              cualquier modificación.
              <Heading size="md" marginBottom="4" marginTop="4">
                Ley aplicable y jurisdicción:
              </Heading>
              Estos T&C se regirán e interpretarán de acuerdo con las leyes de
              Argentina. Cualquier disputa que surja en relación con estos T&C
              estará sujeta a la jurisdicción exclusiva de los tribunales de
              Argentina. Si tienes alguna pregunta o inquietud sobre estos T&C,
              por favor contáctanos a través de [correo electrónico de
              contacto]. Fecha de entrada en vigencia: [fecha de entrada en
              vigencia de los T&C]
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseModal1}>
                Cerrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Flex justify="space-between">
          <Checkbox isRequired {...register('aceptarTerminos')}>
            Aceptar politicas y privacidad *
          </Checkbox>

          <Button
            onClick={onOpenModal2}
            style={{
              marginRight: '560px',
              marginTop: '9px',
              marginBottom: '10px',
            }}
            variant="unstyled"
          >
            <u>Leer</u>
          </Button>

          <Modal isOpen={isOpenModal2} onClose={onCloseModal2}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Politicas y Privacidad</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Heading size="md" marginBottom="4">
                  Política de Privacidad de AlmoCred
                </Heading>
                En AlmoCred, nos comprometemos a proteger y respetar tu
                privacidad. Esta política de privacidad establece cómo
                recopilamos, usamos y protegemos la información personal que
                puedas proporcionarnos a través de nuestro sitio web,
                aplicaciones móviles u otros canales de comunicación. Al acceder
                y utilizar nuestros servicios, aceptas las prácticas descritas
                en esta política de privacidad.
                <Heading size="md" marginBottom="4" marginTop="4">
                  Información que recopilamos:{' '}
                </Heading>
                Recopilamos la información personal que nos proporcionas
                voluntariamente, como tu nombre, dirección de correo
                electrónico, número de teléfono y cualquier otra información que
                elijas proporcionarnos al interactuar con nosotros.
                <Heading size="md" marginBottom="4" marginTop="4">
                  Uso de la información recopilada:{' '}
                </Heading>
                Utilizamos la información que recopilamos para los siguientes
                propósitos:
                <OrderedList>
                  <ListItem marginBottom="1" marginTop="2">
                    Procesar y gestionar tus solicitudes de productos o
                    servicios.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Proporcionar asistencia al cliente y responder a tus
                    consultas.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Personalizar y mejorar tu experiencia al utilizar nuestros
                    servicios.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Enviar comunicaciones de marketing y promocionales
                    relacionadas con nuestros productos y servicios, siempre y
                    cuando hayas dado tu consentimiento previo.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Cumplir con nuestras obligaciones legales y regulatorias.
                  </ListItem>
                </OrderedList>
                <Heading size="md" marginBottom="4" marginTop="4">
                  Divulgación de información:{' '}
                </Heading>
                No vendemos, alquilamos ni compartimos tu información personal
                con terceros para fines de marketing directo sin tu
                consentimiento explícito. Sin embargo, podemos compartir tu
                información con terceros en las siguientes circunstancias:{' '}
                <OrderedList styleType="decimal">
                  <ListItem marginBottom="1" marginTop="2">
                    Con proveedores de servicios y socios comerciales que nos
                    ayudan a brindar nuestros productos y servicios.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Para cumplir con las leyes aplicables, regulaciones
                    gubernamentales, órdenes judiciales o procesos legales.
                  </ListItem>
                  <ListItem marginBottom="1">
                    Para proteger nuestros derechos, propiedad o seguridad, así
                    como los derechos, propiedad o seguridad de nuestros
                    usuarios u otros.
                  </ListItem>
                </OrderedList>
                <Heading size="md" marginBottom="4" marginTop="4">
                  Seguridad de la información:{' '}
                </Heading>
                Implementamos medidas de seguridad adecuadas para proteger tu
                información personal contra el acceso no autorizado, la
                alteración, la divulgación o la destrucción. Sin embargo, ten en
                cuenta que ninguna transmisión de datos por Internet o cualquier
                otra red puede garantizar ser 100% segura.
                <Heading size="md" marginBottom="4" marginTop="4">
                  Tus derechos:{' '}
                </Heading>
                Tienes derecho a acceder, corregir, actualizar o eliminar la
                información personal que tenemos sobre ti. Si deseas ejercer
                estos derechos, ponte en contacto con nosotros utilizando los
                detalles de contacto que se proporcionan al final de esta
                política de privacidad.
                <Heading size="md" marginBottom="4" marginTop="4">
                  Cambios en la política de privacidad:{' '}
                </Heading>
                Podemos actualizar esta política de privacidad de vez en cuando
                para reflejar cambios en nuestras prácticas de privacidad. Te
                recomendamos que revises periódicamente esta política para estar
                al tanto de cualquier cambio.
                <Heading size="md" marginBottom="4" marginTop="4">
                  Contacto:{' '}
                </Heading>
                Si tienes alguna pregunta, inquietud o solicitud relacionada con
                esta política de privacidad, puedes comunicarte con nosotros a
                través de los siguientes medios: - Nombre de la empresa:
                AlmoCred - Dirección: [Dirección de la empresa] - Correo
                electrónico: [Correo electrónico de contacto] - Teléfono:
                [Número de teléfono de contacto]
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onCloseModal2}>
                  Cerrar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button
            type="submit"
            isLoading={isSubmitting}
            _hover={{
              bg: 'rgba(38, 127, 205, 0.9)',
              color: 'white',
            }}
            color="rgb(0, 120, 148)"
            variant="outline"
            mt={4}
            onClick={() => sendEmail(formData)}
          >
            Enviar
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default Formulario;
