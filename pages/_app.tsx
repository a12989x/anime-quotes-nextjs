import Layout from '@/components/layout';
import QuoteContextProvider from '@/context/QuoteContext';
import '@/styles/globals.scss';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <QuoteContextProvider>
        <Component {...pageProps} />
      </QuoteContextProvider>
    </Layout>
  );
};

export default MyApp;
