import { AppProps } from 'next/app';
import QuoteContextProvider from '../context/QuoteContext';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <QuoteContextProvider>
      <Component {...pageProps} />
    </QuoteContextProvider>
  );
};

export default MyApp;
