/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';
import { MyContextProvider } from '~/contexts/MyContext';
import { Chakra } from '~/lib/components/Chakra';
import Layout from '~/lib/layout';
import '~/lib/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyContextProvider>
      <Chakra>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </MyContextProvider>
  );
};

export default MyApp;
