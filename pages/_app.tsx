import Head from '@/components/Head';
import Layout from '@/components/layout';
import QuoteContextProvider from '@/context/QuoteContext';
import '@/styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <ThemeProvider defaultTheme='system'>
        <Layout>
          <QuoteContextProvider>
            <Component {...pageProps} />
          </QuoteContextProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
