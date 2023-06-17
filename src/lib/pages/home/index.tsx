import { Container, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

// import Formulario from '~/lib/components/Formulario/Formulario';
// import Location from '~/lib/components/Location';
// import SegmentoCard from '~/lib/components/SegmentoCard/Segmento';
import Slider from '~/lib/components/Slider/Slider';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Inicio" />
      <Container maxW="container.lg" bg="whiteAlpha.500">
        <Slider />
        {/* <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <SegmentoCard />
        </SimpleGrid> */}
        {/* <Formulario />
        <Location /> */}
      </Container>
    </Flex>
  );
};

export default Home;
