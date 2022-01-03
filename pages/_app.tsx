import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { ZomatoTheme } from "../theme";
import config from "../nativebase.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider theme={ZomatoTheme} config={config}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
