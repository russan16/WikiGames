import React, {Component} from "react";
import api from "../../services/api";

export default class InternaGeneros extends Component {
    state = {
        gamesGeneros: [],
        title: ''
    };

    componentDidMount() {
        this.getGamesGenre();
    };

    getGamesGenre = async () => {
        const {genreId} = this.props.match.params;
        const {genreName} = this.props.match.params;
        const response = await api.get(`games?genres=${genreId}`);
        this.setState({gamesGeneros: response.data.results});
        this.setState({title: genreName})
        console.log(genreId);
    };

    render() {

        return (
            <div className="w-100 row mb-5">
                <div className="w-100 my-2">
                    <h1 className="text-light display-4">Gênero: {this.state.title}</h1>
                </div>
                {this.state.gamesGeneros.map(element => (
                    // CARD OBJ
                    <div key={element.id} className="card bg-transparent rounded-0 border-secondary col-1 col-md-4 col-lg-3">
                        <div className="card-body">
                            <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                <img className="card-img-top img-fluid" src={element.background_image} alt={element.name}/>
                            </figure>
                            <h5 className="card-title text-light">{element.name}</h5>
                            <p className="card-text text-light">Nota: {element.rating}</p>
                            <p className="card-text text-light">Lançamento: {element.released}</p>
                            <div className="w-100 my-3">
                                <span className="mr-2 text-light">Generos:</span>
                                {element.genres.map(element => (
                                    <a href={`/genero/${element.id}/${element.name}`} key={element.name} className="badge badge-secondary mr-2">{element.name}</a>
                                ))}
                            </div>
                            <div className="w-100">
                                <span className="mr-2 text-light">Plataformas:</span>
                                {element.platforms.map(plataforma => (
                                    <a href={`/plataforma-games/${plataforma.platform.id}/${plataforma.platform.name}`} key={plataforma.platform.id} className="badge badge-secondary mr-2">{plataforma.platform.name}</a>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <a href={`/game/${element.id}`} className="btn btn-info btn-block" target="_blank">Ver mais</a>
                        </div>
                    </div>
                    // /CARD OBJ
                ))}
            </div>
        );
    }
}