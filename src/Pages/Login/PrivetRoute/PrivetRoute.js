import React from "react";
import {Spinner} from 'react-bootstrap';
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

 const PriverRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuth();
    if (isLoading){
    return <Spinner animation="border" varient="danger" />
    }

    return (
    <Route
    {...rest}
    render={({location}) => user.email ? children : <Redirect
    to = {{
        pathname: "/login",
        state: {from: location}
    }}
    ></Redirect>
}
    >
        <h2>Please Login</h2>
    </Route>
    );
};

export default PriverRoute;