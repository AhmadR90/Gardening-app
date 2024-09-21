import React from "react";

const Footer = () => {
  return (
    <>
    <hr />
      <div>
        <div className="flex justify-center gap-4 space-x-96  p-5 text-center h-20  ">
          <div className="h-20 w-28 flex p-2 gap-3">
            <img
              className="rounded-lg"
              src="https://i.pinimg.com/564x/6e/c6/e5/6ec6e5b60c9008b7e6dcdfca289666ae.jpg"
              alt="logo image"
            />
            <span className="flex text-center font-bold pt-4 text-2xl">
              DummyGarden
            </span>
          </div>
        </div>
        <div className="flex space-x-6 justify-evenly mt-6">
          <div className=" h-60 w-96 bg-slate-100 rounded-xl ">
            <input
              className=" flex mt-14 ml-16 justify-items-center "
              type="text"
              placeholder="Enter your Name"
            />
            <br />
            <button>Submit</button>
          </div>
        
          <div className="h-60 w-96 bg-slate-100  rounded-xl"></div>
          <div className="h-60 w-96 bg-slate-100 rounded-xl"></div>
        </div>
        <br />
        <hr />
        <div className="flex justify-center align-text-bottom">COPYRIGHT-OCEANWP</div>
        <hr />
      </div>
    </>
  );
};

export default Footer;
