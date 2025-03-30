import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AnimatedLayout } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Add favicon directly in _app for higher priority */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedLayout>
        <Component {...pageProps} />
      </AnimatedLayout>
    </>
  );
}

export default MyApp;
