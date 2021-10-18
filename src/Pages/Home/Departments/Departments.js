import React from "react";
import {useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Department from "../Department/Department";


 const Departments = () => {
     const [ departments, setDepartments ] = useState([]);
     useEffect(() =>{ 
        fetch('services.json')
        .then(res => res.json())
        .then(data => setDepartments(data))
     }, [])

     return (
        <div id="services" className="mt-5">
            <h2 className="text-primary mb-4">Our Departments</h2>
            <div>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        departments.map(service => <Department key={service.id} service={service}></Department>)
                    }
                </Row>
            </div>
        </div>
     )
 }

 export default Departments;