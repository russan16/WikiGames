import React, {Component} from "react";
import api from "../../services/api";

export default class ReleaseList extends Component {
    state = {
        games: [],
        pagination: 12,
        limit: true
    };

    componentDidMount() {
        this.loadReleasedGames();
        this.viewMore();
    };

    viewMore = () => {
        const calc = this.state.pagination;
        this.setState({pagination: calc + 12});
        console.log(calc);
        if (calc < 48) {
            this.loadReleasedGames();
        } else {
            this.loadReleasedGames();
            this.setState({limit: false});
        }
    }


    loadReleasedGames = async () => {
        const response = await api.get(`games?page_size=${this.state.pagination}`);
        this.setState({games: response.data.results});
    };

    render() {
        return (
            <div className="released-list w-100 row pb-5">
                <div className="col-12 mt-5 mb-3">
                    <h3 className="display-4 text-light">Os mais populares</h3>
                </div>
                {this.state.games.map(game => (
                    <div key={game.id} className="card bg-transparent rounded-0 border-secondary col-6 col-md-4 col-lg-2">
                        <div className="card-body">
                            <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                <img className="card-img-top img-fluid" src={game.background_image} alt="Card image cap"/>
                            </figure>
                            <h5 className="card-title text-light">{game.name}</h5>
                            <p className="card-text text-light">Nota: {game.rating}</p>
                            <p className="card-text text-light">Lançamento: {game.released}</p>
                            <div className="w-100 my-3">
                                <span className="mr-2 text-light">Generos:</span>
                                {game.genres.map(element => (
                                    <span key={element.name} className="badge badge-secondary mr-2">{element.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <a href={`/game/${game.id}`} className="btn btn-info btn-block" target="_blank">Ver mais</a>
                        </div>
                    </div>
                ))}
                <div id="loadMore" className={this.state.limit ? 'my-3 col-12' : 'd-none'}>
                    <button onClick={this.viewMore} className="btn btn-warning mx-auto d-block text-uppercase">Carregar mais</button>
                </div>
            </div>
        );
    }
};