import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Image from "next/image";
import globalPlants from "@/public/data";

import { useAtom } from "jotai";

export default function PlantCard() {
  const [plants, setPlants] = useAtom(globalPlants);
  function handleDelete(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
  }

  return (
    <StyledList>
      {plants.map((plant) => {
        return (
          <ListItem key={plant.id}>
            <button onClick={() => handleDelete(plant.id)}>Delete</button>
            <h2>{plant.name}</h2>

            <Image
              src={plant.image}
              width={100}
              height={100}
              alt={plant.name}
            />
          </ListItem>
        );
      })}
    </StyledList>
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
