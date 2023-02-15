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
  function handleChangeDate(event, id) {
    event.preventDefault();

    const data = event.target.value;

    setPlants(
      plants.map((plant) => {
        return plant.id === id ? { ...plant, date: data } : plant;
      })
    );
  }

  function handleChangePlace(event, id) {
    event.preventDefault();

    const data = event.target.value;

    setPlants(
      plants.map((plant) => {
        return plant.id === id ? { ...plant, place: data } : plant;
      })
    );
  }

  return (
    <StyledList>
      {plants &&
        plants.map((plant) => {
          return (
            <ListItem key={plant.id}>
              <button onClick={() => handleDelete(plant.id)}>Delete</button>
              <h2>{plant.name}</h2>
              <p>{plant.watering} </p>
              <p>{plant.light} </p>
              <form>
                <label htmlFor="Place"> Place: </label>
                <select
                  name="place"
                  id="Place"
                  onChange={(event) => {
                    handleChangePlace(event, plant.id);
                  }}
                >
                  <option selected value={plant.place}>
                    {plant.place}
                  </option>
                  <option value="living room">living room</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="basement">Basement</option>
                  <option value="outdoor">Outdoor</option>
                </select>
                <label htmlFor="Last watering"> Last watering: </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={plant.date}
                  onChange={(event) => {
                    handleChangeDate(event, plant.id);
                  }}
                />
              </form>
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
