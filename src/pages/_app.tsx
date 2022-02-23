import { ThemeProvider } from 'context/ThemeContext';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import GlobalStyles from 'styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
