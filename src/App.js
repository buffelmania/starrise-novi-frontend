import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Wist from "./Pages/WistJeDatPage/Wist-je-dat";
import Links from "./Pages/LinksPage/Links";
import Signin from "./Pages/SigninPage/Signin";
import SignUp from "./Pages/SignUpPage/SignUp";
import Home from "./Pages/HomePage/Home";
import ZonEnMaan from "./Pages/ZonEnMaanPage/ZonEnMaan";
import Account from "./Pages/AccountPage/Account";
import {AuthContextProvider} from "./components/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Quiz from "./Pages/TestJeKennis/Quiz";
import Footer from "./components/Footer/Footer";
import ToDo from "./Pages/ThingsToDo/ToDo";
import ISStracker from "./Pages/ISSPage/ISSTracker";





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
              <Route path="/ToDo" element={<ToDo />} />
              <Route path="/ISSTracker" element={<ISStracker />} />
              <Route path="/ZonEnMaan" element={<ProtectedRoute><ZonEnMaan /></ProtectedRoute>} />
              <Route path="/Account" element={<ProtectedRoute><Account /></ProtectedRoute>}/>

          </Routes>
        </AuthContextProvider>



            </BrowserRouter>
            <Footer/>
        </div>




  )
}

export default App;
