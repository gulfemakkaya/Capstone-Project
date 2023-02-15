import PlantCard from "@/components/PlantCard";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import TitleBar from "@/components/TitleBar";
import { useState } from "react";
import Popup from "@/components/Popup/Popup";

export default function HomePage() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <main>
        <PlantCard />
      </main>

      <button
        onClick={() => {
          setButtonPopup(!buttonPopup);
        }}
      >
        {buttonPopup ? "-" : "+"}
      </button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </>
  );
}

const StyledMain = styled.main`
  background-color: #9f684b;
`;
