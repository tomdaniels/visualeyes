import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { THEME } from '../constants';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: THEME.ghost.hex,
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Visualeyes</title>
        <meta property="javascript algorithm visualiser" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
