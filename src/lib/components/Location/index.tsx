import { Box } from '@chakra-ui/react';
import type React from 'react';

const Location: React.FC = () => {
  return (
    <Box w="full" p={2}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.719517314241!2d-58.4020462!3d-34.611253399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaef1be73d45%3A0xe8b9b976615dc139!2sAv.%20Hip%C3%B3lito%20Yrigoyen%202520%2C%20C1089%20CABA!5e0!3m2!1ses-419!2sar!4v1685576350270!5m2!1ses-419!2sar"
        title="Location"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

export default Location;
