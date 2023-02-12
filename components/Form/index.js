// import PlantCard from "../PlantCard";
// import initialPlants from "@/public/data";
// import useState from "react";

// export default function Form() {
//   // function handleSubmit(event) {
//   //   event.preventDefault();
//   //   const newPlant = {name};
//   //   const formData = new FormData(event.target);
//   //   const data = Object.fromEntries(formData);
//   //   console.log(newPlant);
//   // }
//   const plants = [];

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newPlant = Object.fromEntries(formData);
//     plants.push(newPlant);
//     console.log(plants);
//   }

//   return (
//     <>
//       <h2>Add a new plant</h2>
//       <form type="add-edit" onSubmit={handleSubmit}>
//         <label htmlFor="Name">Name of the plant: </label>
//         <input
//           type="text"
//           required
//           id="Name"
//           onChange={(event) => {
//             event.target.value;
//           }}
//         ></input>
//         <label htmlFor="Watering Time"> When to water: </label>
//         <select>
//           <option value="once a week" id="Watering Time">
//             once a week
//           </option>
//           <option value="two - three times a week">
//             two - three times a week
//           </option>
//           <option value="all two days">all two days</option>
//         </select>
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }
