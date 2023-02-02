import { createGlobalStyle } from "styled-components";
//components/List.js
import styled from "styled-components";

import { useState } from "react";
import Image from "next/image";
import initialPlants from "@/public/data";

export default function PlantCard() {
  const [plants, setPlants] = useState(initialPlants);

  return (
    <>
      <StyledList>
        {plants.map((plant) => {
          console.log(plant);

          return (
            <>
              <ListItem>
                <h2>{plant.name}</h2>
                <br />

                {
                  <Image
                    src={plant.image}
                    width={100}
                    height={100}
                    alt={plant.name}
                  />
                }
              </ListItem>
            </>
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
