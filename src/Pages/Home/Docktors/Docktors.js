import React from "react";
import {useEffect, useState } from 'react';
import Docktor from "../Docktor/Docktor";
import { Row } from 'react-bootstrap';



 const Docktors = () => {
     const [ docktors, setDocktors ] = useState([]);
     useEffect(() =>{ 
        fetch('services.json')
        .then(res => res.json())
        .then(data => setDocktors(data))
     }, [])

     return (
        <div id="services" className="mt-5">
            <h2 className="text-primary mb-3">Our Doctors</h2>
            <div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        docktors.map(service => <Docktor key={service.id} service={service}></Docktor>)
                    }
                </Row>
            </div>
        </div>
     )
 }

 export default Docktors;