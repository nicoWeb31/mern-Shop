import React,{ useEffect,useState} from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from '../../function/auth'

const AdminRoute = ({ children, ...rest }) => {


    const [ok, setOk] = useState(false);

    const user = useSelector((state) => state.auth);
    // const admin = currentAdmin(user.token);


    useEffect(() => {

        if(user && user.token){
            try {
                const admin = currentAdmin(user.token);
                console.log("🚀 ~ file: AdminRoute.jsx ~ line 21 ~ useEffect ~ admin", admin)
                if(admin){
                    setOk(true);
                }
                setOk(true);
            } catch (error) {
                console.log('ADMIN ROUTE UNAUTHORIZED', error)
                
            }
        }

    },[user])

    return ok ? <Route {...rest} render={()=>children}/> : <LoadingToRedirect/> ;
};

export default AdminRoute;
