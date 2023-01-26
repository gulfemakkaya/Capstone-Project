import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <main>
        <H1Item>Name of the App</H1Item>
        <PlantCard />
      </main>
    </>
  );
}

const H1Item = styled.h1`
  text-align: center;
`;
