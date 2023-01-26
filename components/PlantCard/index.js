import { createGlobalStyle } from "styled-components";
//components/List.js
import styled from "styled-components";

export default function PlantCard() {
  return (
    <>
      <StyledList>
        <ListItem>
          <h2>Monstera</h2>
          <p>Living Room</p>
          <p>Once A week</p>
        </ListItem>
        <ListItem>
          <h2>Monstera</h2>
          <p>Living Room</p>
          <p>Once A week</p>
        </ListItem>
        <ListItem>
          <h2>Monstera</h2>
          <p>Living Room</p>
          <p>Once A week</p>
        </ListItem>
        <ListItem>
          <h2>Monstera</h2>
          <p>Living Room</p>
          <p>Once A week</p>
        </ListItem>
      </StyledList>
    </>
  );
}

const ListItem = styled.li`
  border: 2px solid grey;
  border-radius: 3px 4px;
  margin: 10px 10px 10px 10px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 2px 2px 2px 2px;
  padding: 2px 2px 2px 2px;
`;
