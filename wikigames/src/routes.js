import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReleaseList from "./components/CardModel";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ReleaseList}/>
            <Route path="/game:slug" component={ReleaseList}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;