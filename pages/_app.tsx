import type { AppProps } from "next/app";
import { useState } from "react";
import GlobalContextProvider from "../components/GlobalContext";
import KYA from "../components/home/KYA";
import Leftbar from "../components/partials/Leftbar";
import Navbar from "../components/partials/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [showKya, setShowKya] = useState<boolean>(true);

  return (
    <div className=" relative max-w-[1660px] mx-auto px-8">
      <GlobalContextProvider>
        <Navbar />
        <KYA isOpen={showKya} setIsOpen={setShowKya} />
        <Component {...pageProps} />
        <Leftbar />
      </GlobalContextProvider>
    </div>
  );
}
