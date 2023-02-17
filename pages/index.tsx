import Head from "next/head";
import WrapUnwrap from "../components/home/WrapUnwrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>anetaBTC</title>
        <meta name="description" content="this is an anetaBTC website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo/white-logo.png" />
      </Head>
      <main className="flex items-center justify-center min-h-[100vh]">
        <WrapUnwrap />
      </main>
    </>
  );
}
