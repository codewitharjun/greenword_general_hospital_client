import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../imagess/image1.jpg';
import banner2 from '../../../imagess/image2.jpg';
import banner3 from '../../../imagess/image3.jpg';

const Banner =() => {
    return (
        <>
            <Carousel id="home">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4 className="text-crsl">"Physical fitness is the first requisite of happiness."</h4>
                    <h5 className="text-crsl">Joseph Pilates</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h4 className="text-crsl">“Health is not valued until sickness comes.”</h4>
                    <h5 className="text-crsl">Thomas Fuller</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4 className="text-crsl">"Success is getting what you want, happiness is wanting what you get."</h4>
                    <h5 className="text-crsl">W.P. Kinsella</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </>
    );
}

export default Banner;