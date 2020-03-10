import React, {Component} from "react";
import api from "../../services/api";

export default class ReleaseList extends Component {
    state = {
        games: []
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
                <div className="col-12 mt-5 mb-3">
                    <h3 className="display-4">Os mais populares</h3>
                </div>
                {this.state.games.map(game => (
                    <div key={game.id} className="card col-6 col-md-4 col-lg-2">
                        <div className="card-body">
                            <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                <img className="card-img-top img-fluid" src={game.background_image} alt="Card image cap"/>
                            </figure>
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text">Nota: {game.rating}</p>
                            <p className="card-text">Lançamento: {game.released}</p>
                            <div className="w-100 my-3">
                                <span className="mr-2">Generos:</span>
                                {game.genres.map(element => (
                                    <span key={element.name} className="badge badge-warning mr-2">{element.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <a href="#" className="btn btn-primary btn-block">Ver mais</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};