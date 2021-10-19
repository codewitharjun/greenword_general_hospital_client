import React from "react";
import { Card, Col, Button } from 'react-bootstrap';

 const Department = (props) => {
     const {id, price, digName, digImg} = props.service;
     return (
        <div className="service pb-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={digImg} />
                    <Card.Body>
                        <Card.Title>Department: {digName}</Card.Title>
                        <Button variant="warning">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
     )
 }

 export default Department;