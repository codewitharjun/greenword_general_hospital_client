import React from "react";
import {Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

 const Register = () => {
     const {signInUsingGoogle, handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();

     return (
        <div className="bg-lred">
            <div>
                <h2 className="text-primary pt-3">Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} className="my-2" type="text" name="" id="" placeholder="Your Name" required/>
                    <br/>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required/>
                    <br/>
                    <input onBlur={handlePasswordChange} className="my-2" type="password" name="" id="" placeholder="Enter Password" required/>
                    <br/>
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Re-Enter Password" required/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>
                <p className="text-danger">{error}</p>
                <p>Allready You Have Account? <Link to="/login">Login Here</Link></p>
                <p className="mt-5 text-success">You can also Register using Google</p>
                <Button className="mb-5" onClick={signInUsingGoogle} variant="warning"><i className="fab fa-google google-style"></i></Button>
            </div>
        </div>
     );
 };

 export default Register;