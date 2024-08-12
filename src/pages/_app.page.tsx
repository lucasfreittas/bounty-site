import { Menu } from "@/components/Menu";
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return(
     <>
      <Menu />
      <Component {...pageProps} />
     </>
    );
}
