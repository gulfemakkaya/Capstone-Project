import globalPlants from "@/public/data";
import { useAtom } from "jotai";
import styled from "styled-components";

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
      <StyledFormTitle>Add a new plant</StyledFormTitle>
      <StyledForm
        onSubmit={(event) => {
          handleSubmit(event);
          setTrigger(false);
        }}
      >
        <Label htmlFor="Name">Name of the plant: </Label>
        <Input name="name" type="text" required id="Name" />
        <Label htmlFor="Picture">Picture URl of plant </Label>
        <Input name="image" type="text" required id="Picture" />
        <Label htmlFor="Watering Time"> When to water: </Label>
        <Select name="watering" id="Watering Time">
          <option value="once a week" id="Watering Time">
            once a week
          </option>
          <option value="two - three times a week">
            two - three times a week
          </option>
          <option value="all two days">all two days</option>
        </Select>
        <Label htmlFor="Place"> Place: </Label>
        <Select name="place" id="Place">
          <option value="living room">living room</option>
          <option value="kitchen">Kitchen</option>
          <option value="basement">Basement</option>
          <option value="outdoor">Outdoor</option>
        </Select>
        <Label htmlFor="last-watering"> Last watering: </Label>
        <Input name="date" type="date" id="Last watering" />
        <Button type="submit">submit</Button>
      </StyledForm>
    </>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  //align-items: center;
  padding: 10px;
`;

const StyledFormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
  width: 30%;
  margin: 2rem auto;
`;
