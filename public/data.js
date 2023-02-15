import PlantCard from "@/components/PlantCard";
import { atomWithStorage } from "jotai/utils";

const initialPlants = [
  {
    name: "Snake Plant",
    image: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg",
    watering: "every 2-4 weeks",
    light: " low to medium light",
    id: "1",
  },
  {
    name: "Monstera",
    image: "https://images.pexels.com/photos/6597437/pexels-photo-6597437.jpeg",
    watering: "every 1-2 weeks",
    light: "bright indirect light",
    id: "2",
  },
  {
    name: "Pothos",
    image: "https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg",
    watering: "every 1-2 weeks",
    light: "medium to low light",
    id: "3",
  },
  {
    name: "Spider Plant",
    image: "https://images.pexels.com/photos/4603327/pexels-photo-4603327.jpeg",
    watering: "every 1-2 weeks",
    light: "bright indirect light",
    id: "4",
  },
  {
    name: "Aloe Vera ",
    image: "https://images.pexels.com/photos/1671650/pexels-photo-1671650.jpeg",
    watering: "every 3-4 weeks",
    light: " bright indirect light",
    id: "5",
  },
  // {
  //   name: "ZZ Plant",
  //   image: "https://images.pexels.com/photos/7513150/pexels-photo-7513150.jpeg",
  //   watering: "every 2-3 weeks",
  //   light: "low to medium light",
  // },
  // {
  //   name: "Jade Plant",
  //   image: "https://images.pexels.com/photos/6045046/pexels-photo-6045046.jpeg",
  //   watering: "every 1-2 weeks",
  //   light: " bright direct light",
  // },
  // {
  //   name: "Hoya",
  //   image:
  //     "https://images.pexels.com/photos/14958768/pexels-photo-14958768.jpeg",
  //   watering: " every 2-3 weeks",
  //   light: "bright indirect light",
  // },
  // {
  //   name: "Rubber Plant ",
  //   image: "https://images.pexels.com/photos/993018/pexels-photo-993018.jpeg",
  //   watering: " every 1-2 weeks",
  //   light: "bright indirect light",
  // },
  // {
  //   name: "Philodendron",
  //   image: "https://images.pexels.com/photos/7663987/pexels-photo-7663987.jpeg",
  //   watering: "every 1-2 weeks",
  //   light: "low to medium light",
  // },
  // {
  //   name: "Maranta",
  //   image:
  //     "https://images.pexels.com/photos/15406171/pexels-photo-15406171.jpeg",
  //   watering: "every 1-2 weeks",
  //   light: "bright indirect light",
  // },
  // {
  //   name: "Peperomia",
  //   image:
  //     "https://images.pexels.com/photos/10984050/pexels-photo-10984050.jpeg",
  //   watering: "every 1-2 weeks",
  //   light: "bright indirect light",
  // },

  // {
  //   name: "Orchid",
  //   image: "https://images.pexels.com/photos/1021386/pexels-photo-1021386.jpeg",
  //   watering: "every 1-2 weeks",
  //   light: "bright indirect light",
  // },
];

const globalPlants = atomWithStorage("plants", initialPlants);
export default globalPlants;
