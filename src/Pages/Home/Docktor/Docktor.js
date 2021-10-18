import React from "react";
import { Card, Col, Button } from 'react-bootstrap';


 const Docktor = (props) => {
     const {id, docName, docImg, digName, degree} = props.service;
     return (
        <div className="pb-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={docImg} />
                    <Card.Body>
                        <Card.Title>Name: {docName}</Card.Title>
                        <Card.Text>{digName} Especalist</Card.Text>
                        <Card.Text>Degrees: {degree}</Card.Text>
                        <Button variant="warning">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
     )
 }

 export default Docktor;