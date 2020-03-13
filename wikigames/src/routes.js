import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReleaseList from "./components/CardModel";
import Interna from "./Pages/Interna";
import Busca from "./Pages/Busca";
import Plataformas from "./Pages/Plataformas";
import InternaPlataformas from "./Pages/InternaPlataformas";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ReleaseList}/>
            <Route path="/game/:id" component={Interna}/>
            <Route path="/busca" component={Busca}/>
            <Route path="/plataformas" component={Plataformas}/>
            <Route path="/plataforma-games/:id/:platName" component={InternaPlataformas}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;