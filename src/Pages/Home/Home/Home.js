import React from "react";
import Banner from "../Banner/Banner";
import Departments from "../Departments/Departments";
import Docktors from "../Docktors/Docktors";

 const Home = () => {
     return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Docktors></Docktors>
        </div>
     )
 }

 export default Home;