import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Image from "next/image";
import initialPlants from "@/public/data";
import { v4 as uuidv4 } from "uuid";
import AddPlantButton from "../Buttons/AddPlantButton";

export default function PlantCard() {
  const [plants, setPlants] = useState(initialPlants);

  return (
    <>
      <StyledList>
        {plants.map((plant) => {
          return (
            <ListItem key={uuidv4()}>
              <h2>{plant.name}</h2>

              {
                <Image
                  src={plant.image}
                  width={100}
                  height={100}
                  alt={plant.name}
                />
              }
            </ListItem>
          );
        })}
      </StyledList>
    </>
  );
}

const ListItem = styled.li`
  border: 2px solid grey;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 2px;
  padding: 2px;
`;
