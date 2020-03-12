import React from "react";

const Menu = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
        <a className="navbar-brand text-light" href="#">WikiGames</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/busca">Buscar</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:;" id="developers" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Desenvolvedores
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Ubsisoft</a>
                        <a className="dropdown-item" href="#">Valve</a>
                        <a className="dropdown-item" href="#">Actvision</a>
                        <a className="dropdown-item" href="#">EA Games</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Ver todos</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:;" id="plataforms" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Plataformas
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">PC</a>
                        <a className="dropdown-item" href="#">PlayStation</a>
                        <a className="dropdown-item" href="#">Xbox</a>
                        <a className="dropdown-item" href="#">Nintendo</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Ver todas</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
);

export default Menu;