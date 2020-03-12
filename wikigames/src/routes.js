import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReleaseList from "./components/CardModel";
import Interna from "./Pages/Interna";
import Busca from "./Pages/Busca";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ReleaseList}/>
            <Route path="/game/:id" component={Interna}/>
            <Route path="/busca" component={Busca}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;