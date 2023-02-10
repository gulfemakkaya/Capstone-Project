import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TitleBar from "@/components/TitleBar";
import AddPlantButton from "@/components/Buttons/AddPlantButton";
import Popup from "@/components/Popup/Popup";
import OpenPopupButton from "@/components/Buttons/OpenPopupButton";
import { useState } from "react";

export default function HomePage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <main>
        <PlantCard />

        <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
        <button onClick={() => setButtonPopup(false)}>Close PopUp</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </>
  );
}
