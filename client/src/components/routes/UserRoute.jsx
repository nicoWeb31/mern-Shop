import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = ({ children, ...rest }) => {
    const user = useSelector((state) => state.auth);

    return user && user.token ? <Route {...rest} render={()=>children}/> : <h1 className="text-danger">loading......</h1>;
};

export default UserRoute;
