import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wist from "./pages/Wist-je-dat";
import Links from "./pages/Links";
import RegisterLogin from "./pages/RegisterLogin";
import Home from "./pages/Home";
import ZonEnMaan from "./pages/ZonEnMaan";



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
