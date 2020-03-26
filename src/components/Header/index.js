import React from "react";
import ImgHeader from '../../imgs/wikigames-header.jpg';

const Header = () => (
    <header className="row position-relative d-flex justify-content-center align-items-center">
        <h3 className="text-header display-1 text-light text-center d-flex flex-column position-absolute"> WikiGames <small className="h6">A Wiki de todo Gamer</small></h3>
        <figure className="figure header-img overflow-hidden d-flex justify-content-center align-items-center">
            <img className="img-fluid dark-img" src={ImgHeader} alt="Capa do site"/>
        </figure>
    </header>
);

export default Header;