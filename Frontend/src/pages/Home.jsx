import React from "react";
import Categories from "../components/Categories";

import ClientReviews from "../components/Reviews";


const Home = () => {
  return (
    <>
      <div
        className=" bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/02/8d/8d/028d8d8b01acae55215e4a0a473ddbd0.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-5">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 underline">
              Garden equipments
            </h1>
            <br />
            <p className="text-lg md:text-xl mb-6">
              Discover amazing content and connect with our community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Categories />
      {/* <Tools/> */}
      <ClientReviews/>
      
    </>
  );
};

export default Home;
