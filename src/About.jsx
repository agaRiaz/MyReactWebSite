import React from "react"; 
import Shop from "../src/images/imgcir.png"
import Common from "./Common"; 

const About = () => {
    return (
<>
    <Common
     name="Welcome to About page"
      imgsrc={Shop} 
      visit="/contact"
        btname="Contact Now"
      />
    </>
    )
    
}
export default About;