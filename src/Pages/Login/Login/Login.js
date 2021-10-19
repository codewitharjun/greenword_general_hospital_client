import React from "react";
import {Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

 const Login = () => {
     const {signInUsingGoogle, setIsLoading} = useAuth();
     const location = useLocation();
     const history = useHistory();
     const redirect_url = location.state?.from || '/';
     console.log(location.state?.from);

     const handleGoogleLogIn = () => {
         signInUsingGoogle()
         .then((result) => {
             history.push(redirect_url)
            // setUser(result.user)
        })
        .finally(() => setIsLoading(false))
     }
     return (
        <div>
            <div>
                <h2>Please Login</h2>
                <form>
                    <input className="my-2" type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Enter Password"/>
                    <br/>
                    <input className="my-2" type="submit" name="" id="" value="Submit"/>
                </form>
                <p>New to Greenworld Hospital? <Link to="/register">Register Here</Link></p>
                <Button className="my-5" onClick={handleGoogleLogIn} variant="warning">Google  Sign In</Button>
            </div>
        </div>
     );
 };

 export default Login;