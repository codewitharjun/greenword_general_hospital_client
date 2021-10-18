import React from "react";
import { useParams } from "react-router";

 const Appoint = () => {
     const {appointId} = useParams();
     return (
        <div>
            <h2>This is appoint page.</h2>
        </div>
     )
 }

 export default Appoint;