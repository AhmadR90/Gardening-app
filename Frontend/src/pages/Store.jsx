// import React from 'react';

// const Store = () => {
//   const tool = {
//     name: "Fear flatters the throat",
//     description: "This ergonomic hand trowel is perfect for planting, digging, and turning soil. Made with durable materials to withstand heavy use.",
//     price: "$19.99",
//     imageUrl: "https://yard.oceanwp.org/wp-content/uploads/2016/08/592489B.png", // Replace with actual image URL
//   };

//   return (
//     <div className='bg-zinc-100'>
//         <div><h1 className='mt-20 font-extrabold font-mono'>Our Hand Tools</h1></div>
//     <div className="flex flex-col items-center max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-20">

//       <img src={tool.imageUrl} alt={tool.name} className="w-full h-48 object-cover rounded-lg mb-4" />
//       <h2 className="text-xl font-bold text-gray-800">{tool.name}</h2>
//       <p className="mt-2 text-gray-600">{tool.description}</p>
//       <p className="mt-2 text-lg font-semibold text-gray-800">{tool.price}</p>
//       <button className="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200">
//         Add to Cart
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Store;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Store = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlants = async () => {
    {
      const response = await axios.get("https://api.example.com/plants"); 
      setPlants(response.data);
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Plants</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.name}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Store;
