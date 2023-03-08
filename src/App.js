import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wist from "./Pages/Wist-je-dat";
import Links from "./Pages/Links";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import ZonEnMaan from "./Pages/ZonEnMaan";
import Account from "./Pages/Account";
import {AuthContextProvider} from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Quiz from "./components/Quiz/Quiz";



function App() {

  return (

        <div>
            <BrowserRouter>
          <Navbar />

            <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Wist" element={<Wist />}/>
            <Route path="/Links" element={<Links />} />
              <Route path="/Quiz" element={<Quiz />} />
            <Route path="/Signin" element={<Signin />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ZonEnMaan" element={<ProtectedRoute><ZonEnMaan /></ProtectedRoute>} />
              <Route path="/Account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>

          </Routes>
        </AuthContextProvider>



            </BrowserRouter>
        </div>

  )
}

export default App;
