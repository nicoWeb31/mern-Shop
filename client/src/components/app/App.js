import Register from "../../pages/auth/register/Register";
import React,{useEffect} from 'react';
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from '../../firebase';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../redux/actions/authAction'





import "./app.style.scss";
import Header from "../menu/Header";
import RegisterComplete from "../../pages/auth/registerComplete/RegisterComplete";

const App = () => {

    const dispatch = useDispatch();



//to check firebase auth
    useEffect(() => {

        const unsubscrible = auth.onAuthStateChanged(async (user)=>{
            console.log(user)
            if(user){
                const idTokenResult = await user.getIdTokenResult();
                
                dispatch(loginUser({
                    email: user.email,
                    token: idTokenResult.token

                }))
            }
        })
        


        //cleanup 
        return ()=>unsubscrible()

    },[])


    return (
        <>

                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route
                        path="/register/complete"
                        exact
                        component={RegisterComplete}
                    />
                </Switch>
                <ToastContainer />

        </>
    );
};

export default App;
