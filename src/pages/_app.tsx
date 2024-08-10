import '@mantine/core/styles.css';
import "@/styles/globals.css";
import '@mantine/notifications/styles.css';

import type { AppProps } from 'next/app';
import { Notifications } from '@mantine/notifications';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">

<Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}