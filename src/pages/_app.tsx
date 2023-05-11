import type { NextPage } from 'next';
import type { AppType, AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { trpc } from '~/utils/trpc';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '~/components/layout/layout';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Layout>{page}</Layout>
        </NextUIProvider>
      </NextThemesProvider>
    ));
  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default trpc.withTRPC(MyApp);
