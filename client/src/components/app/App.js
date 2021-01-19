import Register from "../../pages/auth/register/Register";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import { Switch, Route } from "react-router-dom";

import "./app.style.scss";

const App = () => {
    return (
        <div className="App">
            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />


            </Switch>
        </div>
    );
}

export default App;
