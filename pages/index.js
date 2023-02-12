import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TitleBar from "@/components/TitleBar";
import AddPlantButton from "@/components/Buttons/AddPlantButton";
import Popup from "@/components/Popup/Popup";
import OpenPopupButton from "@/components/Buttons/OpenPopupButton";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <main>
        <PlantCard />
      </main>
    </>
  );
}
