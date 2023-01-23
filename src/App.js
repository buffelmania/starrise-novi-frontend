import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wist from "./Pages/Wist-je-dat";
import Links from "./Pages/Links";
import RegisterLogin from "./Pages/RegisterLogin";
import Home from "./Pages/Home";
import ZonEnMaan from "./Pages/ZonEnMaan";



function App() {

  return (
      <BrowserRouter>
        <div>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Wist" element={<Wist />}/>
            <Route path="/Links" element={<Links />} />
            <Route path="/RegisterLogin" element={<RegisterLogin />} />
            <Route path="/ZonEnMaan" element={<ZonEnMaan />} />
          </Routes>




        </div>
      </BrowserRouter>
  )
}

export default App;
