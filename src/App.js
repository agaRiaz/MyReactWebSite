import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Service" element={<Service/>} />
      <Route path="*" element={<Navigate replace to="/"/>} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;
