import Register from "../../pages/auth/register/Register";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import { Switch, Route } from "react-router-dom";

import "./app.style.scss";
import Header from "../menu/Header";

const App = () => {
    return (
        <>

            <Header/>

            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />


            </Switch>
        </>
    );
}

export default App;
