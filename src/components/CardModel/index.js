import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";

export default class ReleaseList extends Component {
    state = {
        games: [],
        hoje: '',
        anoPassado: ''
    };

    componentDidMount() {
        this.loadReleasedGames();
    };

    loadReleasedGames = async () => {
        const time = new Date();
        const dia = ((time.getDate()) < 10 ? '0' : '') + (time.getDate()); // adiciona um '0' em numeros menores que 10
        const mes = ((time.getMonth() + 1) < 10 ? '0' : '') + (time.getMonth() + 1); // adiciona um '0' em numeros menores que 10
        const ano = time.getFullYear();
        this.state.anoPassado = (ano - 1) + '-' + mes + '-' + dia;
        this.state.hoje = ano + '-' + mes + '-' + dia;
        const response = await api.get(`games?dates=${this.state.anoPassado},${this.state.hoje}`);
        this.setState({games: response.data.results});
    };

    render() {
        return (
            <div className="released-list w-100 row mx-0 pb-5">
                <div className="col-12 mt-5 mb-3">
                    <h3 className="display-4 text-light">Recentes</h3>
                </div>
                {this.state.games.map(game => (
                    <div key={game.id} className="card bg-transparent rounded-0 border-secondary col-12 col-md-4 col-lg-3">
                        <div className="card-body">
                            <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                <img className="card-img-top img-fluid" src={game.background_image} alt={game.name}/>
                            </figure>
                            <h5 className="card-title text-light">{game.name}</h5>
                            <p className="card-text text-light">Nota: {game.rating}</p>

                            <p className="card-text text-light">Lançamento: {Intl.DateTimeFormat('pt-BR').format(new Date(game.released))}</p>
                            <div className="w-100 my-3">
                                <span className="mr-2 text-light">Generos:</span>
                                {game.genres.map(element => (
                                    <Link to={`/genero/${element.id}/${element.name}`} key={element.name} className="badge badge-secondary mr-2">{element.name}</Link>
                                ))}
                            </div>
                            <div className="w-100 my-3">
                                <span className="mr-2 text-light">Plataformas:</span>
                                {game.platforms.map(element => (
                                    <Link to={`/plataforma-games/${element.platform.id}/${element.platform.name}`} key={element.platform.id} className="badge badge-secondary mr-2">{element.platform.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <Link to={`/game/${game.id}`} className="btn btn-info btn-block">Ver mais</Link>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};