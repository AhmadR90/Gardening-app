// import React from "react";

// const Footer = () => {
//   return (
//     <>
//     <hr className="mt-8"/>
//       <div className="mt-28">
//         <div className="flex justify-center gap-4 space-x-96  p-5 text-center h-20  ">
//           <div className="h-20 w-28 flex p-2 gap-3">
//             <img
//               className="rounded-lg"
//               src="https://i.pinimg.com/564x/6e/c6/e5/6ec6e5b60c9008b7e6dcdfca289666ae.jpg"
//               alt="logo image"
//             />
//             <span className="flex text-center font-bold pt-4 text-2xl">
//               DummyGarden
//             </span>
//           </div>
//         </div>
//         <div className="flex space-x-6 justify-evenly mt-6">
//           <div className=" h-60 w-96 bg-slate-100 rounded-xl ">
           
//           </div>
        
//           <div className="h-60 w-96 bg-slate-100  rounded-xl"></div>
//           <div className="h-60 w-96 bg-slate-100 rounded-xl"></div>
//         </div>
//         <br />
//         <hr />
//         <div className="flex justify-center align-text-bottom">COPYRIGHT-OCEANWP</div>
//         <hr />
//       </div>
//     </>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10 mb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Gardening Co.</h3>
            <p className="text-sm">Your partner in creating beautiful gardens.</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> {/* Font Awesome Facebook Icon */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> {/* Font Awesome Twitter Icon */}
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> {/* Font Awesome Instagram Icon */}
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Gardening Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
