import React, {Component} from "react";
import api from "../../services/api";

export default class ReleaseList extends Component {
    state = {
        games: [],
        genres: []
    }
    componentDidMount() {
        this.loadReleasedGames();
    }

    loadReleasedGames = async () => {
        const response = await api.get('games');
        this.setState({games: response.data.results});
    }
    render() {
        return (
            <div className="released-list w-100 row">
                {this.state.games.map(game => (
                    <div key={game.id} className="card col-2">
                        <figure className="figure card-figure d-flex justify-content-center align-items-center">
                            <img className="card-img-top img-fluid" src={game.background_image} alt="Card image cap"/>
                        </figure>
                            <div className="card-body">
                                <h5 className="card-title">{game.name}</h5>
                                <p className="card-text">Nota: {game.rating}</p>
                                <p className="card-text">Lançamento: {game.released}</p>
                                <div className="w-100 my-3">
                                    <span className="mr-2">Generos:</span>
                                    {game.genres.map(element => (
                                        <span key={element.name} className="badge badge-warning mr-2">{element.name}</span>
                                    ))}
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <a href="#" className="btn btn-primary">Ver mais</a>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        );
    }
};









/*
const CardModel = () => (
    <div className="card col-6 col-md-3 col-lg-2">
        <img className="card-img-top" src="" alt="Foto do jogo"/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
);

export default CardModel;*/
