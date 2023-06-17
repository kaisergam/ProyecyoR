import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

import mock from 'mock.json';
import { MyContext } from '~/contexts/MyContext';

interface ModalInfoProps {
  itemId: number;
  setSelectedItemId: Dispatch<SetStateAction<number | null>>;
}

interface Segmento {
  id: number;
  segmento: string;
  cobro: string[];
  asistencia: string[];
  requisitos: string[];
  organismos: string[];
  monto: string[];
}

const ModalInfo: React.FC<ModalInfoProps> = ({
  itemId,
  setSelectedItemId,
}: ModalInfoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filteredItem, setFilteredItem] = useState<Segmento | null>(null);
  const finalRef = useRef(null);
  const { setBooleanValue } = useContext(MyContext);

  useEffect(() => {
    if (itemId) {
      onOpen();
      const item = mock.find((e) => e.id === itemId);
      setFilteredItem(item || null);
    }
  }, [itemId, onOpen]);

  const handleCloseModal = () => {
    onClose();
    setSelectedItemId(null);
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={handleCloseModal}
      size="xs"
      finalFocusRef={finalRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{filteredItem?.segmento}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Heading as="h2" size="md" mb={2}>
            Cobro
          </Heading>
          {filteredItem?.cobro.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
          <Heading as="h2" size="md" mb={2}>
            Asistencia
          </Heading>
          {filteredItem?.asistencia.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
          <Heading as="h2" size="md" mb={2}>
            Requisitos
          </Heading>
          {filteredItem?.requisitos.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
          <Heading as="h2" size="md" mb={2}>
            Organismos
          </Heading>
          {filteredItem?.organismos.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              onClose();
              setBooleanValue(true);
              setTimeout(() => {
                setBooleanValue(false);
              }, 3000);
              setSelectedItemId(null);
            }}
          >
            Ir a Formulario
          </Button>
          <Button onClick={handleCloseModal}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalInfo;
