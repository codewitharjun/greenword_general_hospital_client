import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


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
        <div className="bg-green pb-4">
            {/* {
                docktors.find(doc => {
                    if(doc.id == appointId) {
                        setDocktor(doc);
                        console.log(doc)
                    }
                })
            } */}
            <h2 className="text-primary">Enter Your Details Hare</h2>
            <form>
                    <p>Your Appoint Date : 08, Dec 2021</p>
                    <p>Total Amount : 750 Tk</p>
                    <input className="my-2" type="text" name="" id="" placeholder="Your Name" required/>
                    <br/>
                    <input type="email" name="" id="" placeholder="Your Email" required/>
                    <br/>
                    <input type="text" name="" id="" placeholder="Your Mobile Number" required/>
                    <br/>
                    <input type="text" name="" id="" placeholder="Bank Account Number" required/>
                    <br/>
                    <input type="text" name="" id="" placeholder="Bank Card Number" required/>
                    <br/>
                    <br/>
                    <Button variant="warning">Conform Now</Button>
            </form>

            <br/>
            <br/>

                <p variant="warning"> <Link to="/">Back To Home</Link></p>
        </div>
     );
 }

 export default Appoint;