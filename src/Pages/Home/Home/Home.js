import React from "react";
import Banner from "../Banner/Banner";
import Departments from "../Departments/Departments";
import Docktors from "../Docktors/Docktors";

 const Home = () => {
     return (
        <div>
            <Banner className="mb-5"></Banner>
            <Docktors></Docktors>
            <Departments></Departments>
        </div>
     )
 }

 export default Home;