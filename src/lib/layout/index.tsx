import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import FloatingButton from '../components/FloatButton/FloatButton';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box margin="0" maxWidth={maxWidth} transition="0.5s ease-out">
      <Box margin="0">
        <Header />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
      <FloatingButton />
    </Box>
  );
};

export default Layout;
