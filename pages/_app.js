import GlobalStyle from "@/styles";
import Head from "next/head";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import styled from "styled-components";

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
          <title>Netrix</title>
          <link
            href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAABZWVn/QkJC/ygoKNAdHR0WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARkZG0llZWf9CQkL/KCgo0R0dHRUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADc3NxZGRkbSWVlZ/0JCQv8oKCjQHR0dFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANzc3FkZGRtFZWVn/QkJC/y0tLc6NjY0WAAAAAAAAAAAAAAAAAKvVAwCs2Q0ArPgAAAAAAAAAAAAAAAAAAAAAAAAAAAA3NzcWRkZG0V1dXf2tra34tbW10KCgoBYAptICALDeJAC25FIAuOd6AL3wBwD//wAAAAAAAAAAAAAAAAAAAAAAAAAAADc3NxakpKTN7+/v/9vb2/+1tbXRkKCkGAC452gAwPDqBcf45BfP/mwcz/8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAurq6FtDQ0NLw8PD/29vb/7W1tdEmwuplFM394S/U/9su1f88Hs3/AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC6uroW0NDQ0fDw8P/a29v/nrrB4lHF4khl3/9iceL/DQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqv8AAKzZBK25vBjQ0NDR8PDw/9vb2/+1tbXRnamrGXvj/wEAAAAAAAAAAAAAAAAAAAAAAAAAAABlyQAArt0dALjmMgC762sAu+wburq6FtDQ0NLw8PD/29vb2K+vrxoAp9YLAKvXFACP4AAAAAAAAAAAAAAAAAAAd+4AALrqPQLC89sLyPnpJ9L9YFHc/wi6uroW0tLSrOPw9B4Ar98LALPhXwC25YEBv/QJCtP/AQAAAAAAAAAADcf/ACTS/kot0/7mStn/8Vjc/4xg3f8VAAAAAAAAAAAArdwiALbkogC97eUDxfbqF8/+nSnU/y0AAAAAAAAAABLK/wE82P8mXt7/TJPo/5SS5v8WONf/AAAAAAAAAAAAAKziBQHC83kKyfn7JdL9/DfW/5Mv1v8PAAAAAAAAAAAAAAAAAAAAAKb3/wHA9P8RxOv/AgAAAAAAAAAAAAAAAAXG/wEg0v9kL9T/vlvd/8Z44/9hd+j/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMuf8AM9b/HDzY/xKF5v8bn+r/I5bw/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/8AAA//AACH/wAAw/8AAOH/AADwzwAA+E8AAPw/AAD+HwAA/x8AAPO7AADx4QAA+/EAAP/zAAD//wAA//8AAA=="
            rel="icon"
            type="image/x-icon"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Navigation />
      </SWRConfig>
    </SessionProvider>
  );
}
