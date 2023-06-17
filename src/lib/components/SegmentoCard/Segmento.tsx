import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import ModalInfo from '../ModalInfo/ModalInfo';
import mock from 'mock.json';

const SegmentoCard = () => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleProductClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };

  return (
    <>
      {mock.map((item) => (
        <Card key={item.id} title={item.segmento}>
          <CardHeader bgGradient="linear(to right, rgba(38, 127, 205, 0.9), rgb(0, 120, 148))">
            <Heading fontSize="medium" color="white">
              {item.segmento}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text>{item.monto[0] ? item.monto[0] : ''}</Text>
            <Text>{item.monto[1] ? item.monto[1] : ''}</Text>
          </CardBody>
          <CardFooter>
            <Button
              color="rgb(0,120,148)"
              value={item.id}
              onClick={() => handleProductClick(item.id)}
            >
              Ver Producto
            </Button>
          </CardFooter>
        </Card>
      ))}
      {selectedItemId && (
        <ModalInfo
          itemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
        />
      )}
    </>
  );
};

export default SegmentoCard;
