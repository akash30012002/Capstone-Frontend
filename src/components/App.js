import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import SignIn from '../common/SignIn';
import SignUp from '../common/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;