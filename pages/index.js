import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TitleBar from "@/components/TitleBar";
import { useState, useEffect } from "react";
import Popup from "@/components/Popup/Popup";

export default function HomePage() {
  return (
    <>
      <main>
        <PlantCard />
      </main>
    </>
  );
}
