import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

//fetcher function
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </SessionProvider>
  );
}
