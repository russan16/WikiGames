import React, {Component} from "react";
import api from "../../services/api";

export default class InternaPlataformas extends Component {
    state = {
        games: []
    }

    componentDidMount() {
        this.listGames();
    }

    listGames = async () => {
        const {id} = this.props.match.params;
        const result = await api.get(`games?platforms=${id}`);

        this.setState({games: result.data.results});
    }

    render() {
        return (
            <div className="row my-5">
                <div className="w-100 mb-3">
                    <h1 className="display-4 text-light">Mostrando jogos da plataforma</h1>
                </div>
                {this.state.games.map(platItem =>(
                    // CARD OBJ
                    <div key={platItem.id} className="card bg-transparent rounded-0 border-secondary col-6 col-md-4 col-lg-2">
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
                                    <span key={element.name} className="badge badge-secondary mr-2">{element.name}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 mb-3">
                            <a href={`/game/${platItem.id}`} className="btn btn-info btn-block" target="_blank">Ver mais</a>
                        </div>
                    </div>
                    // /CARD OBJ
                ))}
            </div>
        );
    }
}