import React from "react";
import {Button } from 'react-bootstrap';
import useAuth from "../../../hooks/useAuth";

 const Login = () => {
     const {signInUsingGoogle} = useAuth();
     return (
        <div>
            <h2>Please Loginnfghdgdghhg</h2>
            <Button className="my-5" onClick={signInUsingGoogle} variant="warning">Login With Google</Button>
        </div>
     );
 };

 export default Login;