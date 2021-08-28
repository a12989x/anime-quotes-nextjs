import Head from '@/components/Head';
import Layout from '@/components/layout';
import QuoteContextProvider from '@/context/QuoteContext';
import '@/styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import SEO from '../next-seo.config';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head />
      <DefaultSeo {...SEO} />
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
