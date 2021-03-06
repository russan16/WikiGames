import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReleaseList from "./components/CardModel";
import Interna from "./Pages/Interna";
import Busca from "./Pages/Busca";
import Plataformas from "./Pages/Plataformas";
import InternaPlataformas from "./Pages/InternaPlataformas";
import Desenvolvedores from "./Pages/Desenvolvedores";
import InternaDesenvolvedor from "./Pages/InternaDesenvolvedor";
import Generos from "./Pages/Generos";
import InternaGeneros from "./Pages/InternaGeneros";
import Menu from "./components/Menu";
import Header from "./components/Header";


const Routes = () => (
    <BrowserRouter>
        <Menu/>
        <Header/>
        <Switch>
            <Route path="/" exact component={ReleaseList}/>
            <Route path="/game/:id" component={Interna}/>
            <Route path="/busca" component={Busca}/>
            <Route path="/plataformas" component={Plataformas}/>
            <Route path="/plataforma-games/:id/:platName" component={InternaPlataformas}/>
            <Route path="/desenvolvedores" component={Desenvolvedores}/>
            <Route path="/dev/:devSlug/:devName" component={InternaDesenvolvedor}/>
            <Route path="/generos" component={Generos}/>
            <Route path="/genero/:genreId/:genreName" component={InternaGeneros}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;