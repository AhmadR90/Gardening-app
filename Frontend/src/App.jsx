import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/Store";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Categories from "./components/Categories";
import Store from "./pages/Store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    
  
      <Routes>
        <Route path="/" element={<Login/>} >
         
        </Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<Error/>}></Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
