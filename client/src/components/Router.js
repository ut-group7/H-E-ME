import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Splash from "./Splash";
import NotFound from "./NotFound";
import App from "../App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Splash} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router;