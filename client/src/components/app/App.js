import Register from "../../pages/auth/register/Register";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import { Switch, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


import "./app.style.scss";
import Header from "../menu/Header";
import RegisterComplete from "../../pages/auth/registerComplete/RegisterComplete";

const App = () => {
    return (
        <>

            <Header/>

            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/register/complete" exact component={RegisterComplete} />


            </Switch>
            <ToastContainer/>
        </>
    );
}

export default App;
