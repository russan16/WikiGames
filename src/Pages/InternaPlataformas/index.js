import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";

export default class InternaPlataformas extends Component {
    state = {
        games: [],
        platformName: ''
    }

    componentDidMount() {
        this.listGames();
    }

    listGames = async () => {
        const {id} = this.props.match.params;
        const {platName} = this.props.match.params;
        const result = await api.get(`games?platforms=${id}`);

        this.setState({games: result.data.results});
        this.setState({platformName: platName});
    }

    render() {
        return (
            <div className="row mx-0 my-5">
                <div className="w-100 mb-3">
                    <h1 className="display-4 text-light">Plataforma: {this.state.platformName}</h1>
                </div>
                {this.state.games.map(platItem =>(
                    // CARD OBJ
                    <div key={platItem.id} className="card bg-transparent rounded-0 border-secondary col-12 col-md-4 col-lg-3">
                        <div className="card-body">
                            <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                <img className="card-img-top img-fluid" src={platItem.background_image} alt={platItem.name}/>
                            </figure>
                            <h5 className="card-title text-light">{platItem.name}</h5>
                            <p className="card-text text-light">Nota: {platItem.rating}</p>
                            <p className="card-text text-light">Lançamento: {platItem.released}</p>
                            <div className="w-100 my-3">
                                <span className="mr-2 text-light">Generos:</span>
                                {platItem.genres.map(element => (
                                    <a href={`/genero/${element.id}/${element.name}`} key={element.name} className="badge badge-secondary mr-2">{element.name}</a>
                                ))}
                            </div>
                            <div className="w-100">
                                <span className="mr-2 text-light">Plataformas:</span>
                                {platItem.platforms.map(plataforma => (
                                    <a href={`/plataforma-games/${plataforma.platform.id}/${plataforma.platform.name}`} key={plataforma.platform.id} className="badge badge-secondary mr-2">{plataforma.platform.name}</a>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <Link to={`/game/${platItem.id}`} className="btn btn-info btn-block">Ver mais</Link>
                        </div>
                    </div>
                    // /CARD OBJ
                ))}
            </div>
        );
    }
}