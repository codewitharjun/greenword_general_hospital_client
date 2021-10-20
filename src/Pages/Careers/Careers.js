import React from 'react';
import { Row, Card, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import student1 from '../../imagess/s1.jpg';
import ap1 from '../../imagess/ap1.jpg';
import ap2 from '../../imagess/ap2.jpg';
import ap3 from '../../imagess/ap3.jpg';
import './Careers.css';

const Careers = () => {
    return (
        <div  className="achivement">
            <div className="arards">
                <div  className="arards-img">
                    <img src={student1} alt=""/>
                </div>
                    <div className="other-arards">
                        <div>
                        <br/>
                        <br/>
                        <Row xs={1}className="">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={ap1} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">Now Hiring - Post-Acute Care / Long Term Care Attending Physician</Card.Title>
                                        <Card.Text>For immediate consideration, please send your resume to: PACRecruitment@nychhc.org Include the job location of your interest in the subject line</Card.Text>
                                        <Link>
                                            <Button variant="warning">Apply Now</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row xs={1} className="">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={ap2} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">Post-Acute Care/Long Term Care Nursing Recruitment Event</Card.Title>
                                        <Card.Text>Thursday, October 14, 2021 NYC Health + Hospitals/McKinney 594 Albany Avenue, Brooklyn, NY 11203 Please send your resumes to PACRecruit@nychhc.org to register for this event *Regisration is required to participate* Please be advised that proof of COVID-19 vaccination is required prior to hire.</Card.Text>
                                        <Link>
                                            <Button variant="warning">Apply Now</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row xs={1} className="">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={ap3} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">Nursing Leadership Opportunities</Card.Title>
                                        <Card.Text>If you are interested, please send your resume to sampsonj2@nychhc.org to be scheduled for a recruitment event Flyer link</Card.Text>
                                        <Link>
                                            <Button variant="warning">Apply Now</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
    );
};

 export default Careers;