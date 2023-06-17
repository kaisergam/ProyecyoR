import { Flex } from '@chakra-ui/react';

import Navbar from '../components/Navbar/Navbar';

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="center">
      <Navbar />
    </Flex>
  );
};

export default Header;
