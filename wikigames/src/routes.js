import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReleaseList from "./components/CardModel";
import Interna from "./Pages/Interna";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ReleaseList}/>
            <Route path="/game/:id" component={Interna}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;