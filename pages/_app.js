import PlantCard from "@/components/PlantCard";
import TitleBar from "@/components/TitleBar";
import GlobalStyle from "@/styles";
import Head from "next/head";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Capstone Project</title>
      </Head>

      <TitleBar />

      <Component {...pageProps} />
    </>
  );
}
