import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TitleBar from "@/components/TitleBar";

import Popup from "@/components/Popup/Popup";

import { useState } from "react";

export default function HomePage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <main>
        <PlantCard />
      </main>
      <button onClick={() => setButtonPopup(true)}>Open PopUp</button>
      <button onClick={() => setButtonPopup(false)}>Close PopUp</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </>
  );
}
