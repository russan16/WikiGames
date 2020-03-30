import React from "react";
import {Link} from "react-router-dom";

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row sticky-top shadow border-bottom">
        <Link className="navbar-brand text-light" to="/">WikiGames</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/busca">Buscar</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/desenvolvedores">Desenvolvedores</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/generos">Gêneros</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/plataformas">Plataformas</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;