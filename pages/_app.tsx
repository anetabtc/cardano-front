import { useState } from "react";
import KYA from "../components/home/KYA";
import Leftbar from "../components/partials/Leftbar";
import Navbar from "../components/partials/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [showKya, setShowKya] = useState<boolean>(true);
  return (
    <div className=" relative max-w-[1660px] mx-auto px-8">
      <Navbar />
      <KYA isOpen={showKya} setIsOpen={setShowKya} />
      <Component {...pageProps} />
      <Leftbar />
    </div>
  );
}
