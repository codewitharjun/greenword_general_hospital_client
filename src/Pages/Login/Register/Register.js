import React from "react";
import {Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

 const Register = () => {
     const {signInUsingGoogle} = useAuth();
     return (
        <div>
            <div>
                <h2>Register: Create Account</h2>
                <form>
                    <input className="my-2" type="text" name="" id="" placeholder="Your Name"/>
                    <br/>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input className="my-2" type="password" name="" id="" placeholder="Enter Password"/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Re-Enter Password"/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>
                <p>Allready You Have Account? <Link to="/login">Login Here</Link></p>
                <Button className="my-5" onClick={signInUsingGoogle} variant="warning">Google Sign In</Button>
            </div>
        </div>
     );
 };

 export default Register;