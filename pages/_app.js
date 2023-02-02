import PlantCard from "@/components/PlantCard";
import TitleBar from "@/components/TitleBar";
import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <TitleBar />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
