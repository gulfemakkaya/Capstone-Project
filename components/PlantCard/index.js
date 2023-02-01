import { createGlobalStyle } from "styled-components";
//components/List.js
import styled from "styled-components";

import { useState } from "react";
import Image from "next/image";

export default function PlantCard() {
  const [plants, setPlants] = useState([
    {
      name: "Snake Plant",
      image:
        "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Monstera",
      image:
        "https://images.pexels.com/photos/6597437/pexels-photo-6597437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Pothos",
      image:
        "https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Spider Plant",
      image:
        "https://images.pexels.com/photos/4603327/pexels-photo-4603327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Aloe Vera ",
      image:
        "https://images.pexels.com/photos/1671650/pexels-photo-1671650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "ZZ Plant",
      image:
        "https://images.pexels.com/photos/7513150/pexels-photo-7513150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Jade Plant",
      image:
        "https://images.pexels.com/photos/6045046/pexels-photo-6045046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Hoya",
      image:
        "https://images.pexels.com/photos/14958768/pexels-photo-14958768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Rubber Plant ",
      image:
        "https://images.pexels.com/photos/993018/pexels-photo-993018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Philodendron",
      image:
        "https://images.pexels.com/photos/7663987/pexels-photo-7663987.jpeg",
    },
  ]);

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
  border-radius: 10px 10px;
  margin: 10px 10px 10px 10px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 2px 2px 2px 2px;
  padding: 2px 2px 2px 2px;
`;
