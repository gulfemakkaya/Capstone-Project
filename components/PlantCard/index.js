import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Image from "next/image";
import globalPlants from "@/public/data";
import Popup from "../Popup/Popup";
import { useAtom } from "jotai";
import { useState } from "react";

export default function PlantCard() {
  const [buttonPopup, setButtonPopup] = useState(false);
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
              <StyledImageButtonContainer>
                <StyledImage
                  src={plant.image}
                  width={150}
                  height={150}
                  alt={plant.name}
                />

                <StyledDeleteButton onClick={() => handleDelete(plant.id)}>
                  x
                </StyledDeleteButton>
              </StyledImageButtonContainer>
              <h2>{plant.name}</h2>
              <p>{plant.watering} </p>
              <p>{plant.light} </p>
              <Form>
                <label htmlFor="Place"> Place: </label>
                <select
                  name="place"
                  id="Place"
                  onChange={(event) => {
                    handleChangePlace(event, plant.id);
                  }}
                >
                  <option value={plant.place}>{plant.place}</option>
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
              </Form>
            </ListItem>
          );
        })}{" "}
      <StyledAddButton
        onClick={() => {
          setButtonPopup(!buttonPopup);
        }}
      >
        {buttonPopup ? "-" : "+"}
      </StyledAddButton>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </StyledList>
  );
}

const ListItem = styled.li`
  border: 2px #a27150 solid;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 3px 3px darkgrey;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 2px;
  padding: 2px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  label {
    font-size: 16px;
    font-weight: bold;
  }

  select {
    width: 200px;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: #fff;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: blue;
    }
  }

  input[type="date"] {
    width: 200px;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: #fff;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: blue;
    }
  }
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  left: 0%;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  position: absolute;

  left: 18rem;
  &:hover {
    color: #d00;
  }

  &:focus {
    outline: none;
  }
`;

const StyledAddButton = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 1rem;

  border-radius: 50px;
  border: none;

  background-color: #6c705e;
  color: white;

  font-size: 24px;
  font-weight: bold;
  text-align: center;

  width: 60px;
  height: 60px;
  line-height: 60px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #174542;
  }
`;

const StyledImageButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  border: 2px solid #a27150;
`;
