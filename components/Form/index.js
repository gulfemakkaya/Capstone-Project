import PlantCard from "../PlantCard";
import initialPlants from "@/public/data";
import { useState } from "react";
import globalPlants from "@/public/data";
import { useAtom } from "jotai";

export default function Form({ setTrigger }) {
  const [plants, setPlants] = useAtom(globalPlants);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newPlant = Object.fromEntries(formData);

    setPlants([...plants, { ...newPlant, id: crypto.randomUUID() }]);
  }

  return (
    <>
      <h2>Add a new plant</h2>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
          setTrigger(false);
        }}
      >
        <label htmlFor="Name">Name of the plant: </label>
        <input name="name" type="text" required id="Name" />
        <label htmlFor="Picture">Picture URl of plant </label>
        <input name="image" type="text" required id="Picture" />
        <label htmlFor="Watering Time"> When to water: </label>
        <select name="watering" id="Watering Time">
          <option value="once a week" id="Watering Time">
            once a week
          </option>
          <option value="two - three times a week">
            two - three times a week
          </option>
          <option value="all two days">all two days</option>
        </select>
        <label htmlFor="Place"> Place: </label>
        <select name="place" id="Place">
          <option value="living room">living room</option>
          <option value="kitchen">Kitchen</option>
          <option value="basement">Basement</option>
          <option value="outdoor">Outdoor</option>
        </select>
        <label htmlFor="last-watering"> Last watering: </label>
        <input name="date" type="date" id="Last watering" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
