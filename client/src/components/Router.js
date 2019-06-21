import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import NotFound from "./NotFound"; --file literally cant be found - (accidentally deleted?)
import App from "../App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>
)

export default Router;
