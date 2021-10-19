import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

 const Appoint = () => {
    //  const [ docktors, setDocktors ] = useState([]);
    //  const [ docktor, setDocktor ] = useState([]);

    const {departments, setDepartments} = useAuth();

    //  const {appointId} = useParams();

    //  useEffect(() =>{ 
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data => setDocktors(data))
    //  }, [])

     console.log(departments);
     console.log(setDepartments);
     
     return (
        <div>
            {/* {
                docktors.find(doc => {
                    if(doc.id == appointId) {
                        setDocktor(doc);
                        console.log(doc)
                    }
                })
            } */}
            <h2>This is appoint page.</h2>
        </div>
     );
 }

 export default Appoint;