import React from "react";

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
        <a className="navbar-brand text-light" href="/">WikiGames</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/busca">Buscar</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/desenvolvedores">Desenvolvedores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/generos">Gêneros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/plataformas">Plataformas</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;