import React from 'react';
import './NavContact.css'

const Footer = () => {
    return (
        <div className="navcontainr">
            <div className="navcontainr-flex">
                <div>
                    <h5>Contact : +8800123459876</h5>
                    <h5>Emergency : +8800999</h5>
                </div>
                <div>
                    <i className="fab 5x fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i class="fas fa-envelope"></i>
                    {/* <i className="fab fa-google"></i> */}
                    <i className="far fa-paper-plane"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;