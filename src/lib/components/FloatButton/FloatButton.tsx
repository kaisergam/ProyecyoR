import { IconButton, Link } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
  return (
    <Link href="https://wa.me/5491151332160" isExternal>
      <IconButton
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="100"
        size="lg"
        colorScheme="whatsapp"
        aria-label="Search database"
        icon={<FaWhatsapp />}
      />
    </Link>
  );
};

export default FloatingButton;
