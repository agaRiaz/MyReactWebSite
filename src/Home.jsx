import React from "react"; 

import Web from "../src/images/imgd.png";
import Common from "./Common"; 

const Home = () => {
    return(
        <>
        <Common
     name="Grow Your Business with"
      imgsrc={Web} 
      visit="/service"
        btname="Get Started"
      />
        </>
    )
   
}
export default Home;