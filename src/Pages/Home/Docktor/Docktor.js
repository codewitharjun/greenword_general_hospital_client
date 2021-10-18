import React from "react";
import { Card, Col, Button } from 'react-bootstrap';


 const Docktor = (props) => {
     const {id, price, digName, digImg} = props.service;
     return (
        <div className="pb-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={digImg} />
                    <Card.Body>
                        <Card.Title>Department: {digName}</Card.Title>
                        <Card.Title>Price: ${price}</Card.Title>
                            <Button variant="warning">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
     )
 }

 export default Docktor;