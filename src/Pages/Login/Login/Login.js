import React from "react";
import {Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

 const Login = () => {
     const { setIsLoading, handleEmailChange, handlePasswordChange, handleLogIn, signInUsingGoogle, error} = useAuth();
     const location = useLocation();
     const history = useHistory();
     const redirect_url = location.state?.from || '/home';

    //  const {handleLogIn, handleEmailChange, handlePasswordChange, error } = useAuth();

     const handleGoogleLogIn = () => {
         signInUsingGoogle()
         .then((result) => {
             history.push(redirect_url)
            // setUser(result.user)
        })
        .finally(() => setIsLoading(false))
     }

     return (
        <div className="bg-lred">
            <div>
                <h2 className="text-primary pt-3">Please Login</h2>
                <form onSubmit={handleLogIn}>
                    <input onBlur={handleEmailChange} className="my-2" type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter Password"/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>
                <p className="text-danger">{error}</p>
                <p>New to Greenworld Hospital? <Link to="/register">Register Here</Link></p>
                <p className="mt-5 text-success">You can also Login using Google</p>
                <Button className="mb-5" onClick={handleGoogleLogIn} variant="warning"><i className="fab fa-google google-style"></i></Button>
            </div>
        </div>
     );
 };

 export default Login;