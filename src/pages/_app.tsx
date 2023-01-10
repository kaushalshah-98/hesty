import type { AppProps } from 'next/app';
import '~/styles';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};
export default MyApp;
