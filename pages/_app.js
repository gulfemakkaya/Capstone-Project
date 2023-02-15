import PlantCard from "@/components/PlantCard";
import TitleBar from "@/components/TitleBar";
import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Head></Head>

      <TitleBar />

      <Component {...pageProps} />
    </>
  );
}

// const StyledBody = styled.body`
//   background-color: #;
// `;
