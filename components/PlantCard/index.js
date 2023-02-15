import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Image from "next/image";
import globalPlants from "@/public/data";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

export default function PlantCard() {
  const [plants, setPlants] = useAtom(globalPlants);
  function handleDelete(id) {
    setPlants(plants.filter((plant) => plant.id !== id));
  }
  function handleSubmit(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    setPlants(
      plants.map((plant) => {
        return plant.id === id
          ? { ...plant, place: data.place, date: data.date }
          : plant;
      })
    );
  }

  console.log(plants);
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
              <form
                onSubmit={(event) => {
                  handleSubmit(event, plant.id);
                }}
              >
                <label htmlFor="Place"> Place: </label>
                <select name="place" id="Place">
                  <option selected value={plant.place}>
                    {plant.place}
                  </option>
                  <option value="living room" id="Place">
                    living room
                  </option>
                </select>
                <label htmlFor="Last watering"> Last watering: </label>
                <input
                  type="date"
                  name="date"
                  defaultValue={plant.date}
                ></input>
                <button type="submit">submit</button>
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
