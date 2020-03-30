import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";

export default class Generos extends Component {
    state = {
        generos: []
    }

    componentDidMount() {
        this.listGenres();
    }

    listGenres = async () => {
        const response = await api.get('genres');
        this.setState({generos: response.data.results});
    }

    render() {
        const {generos} = this.state;
        return (
            <div className="mt-5 mb-5 flex-wrap">
                <h1 className="display-4 text-light mb-5">Jogos por gêneros</h1>
                {generos.map(element => (
                    <Link key={element.id} to={`/genero/${element.id}/${element.name}`} className="btn btn-secondary mr-2 mb-2">{element.name} <span className="badge badge-pill badge-dark">{element.games_count}</span></Link>
                ))}
            </div>
        );
    }
}