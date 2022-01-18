import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Visualeyes</title>
        <meta property="javascript algorithm visualiser" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
