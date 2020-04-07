import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";

export default class Plataformas extends Component {
    state = {
        plataformas: []
    }

    componentDidMount() {
        this.platformsList();
    }

    platformsList = async () => {
        const result = await api.get('platforms');
        this.setState({plataformas: result.data.results});
    }

    render() {
        return (
            <div className="mt-5 mb-5 flex-wrap">
                <h1 className="display-4 text-light mb-5">Jogos por plataforma</h1>
                {this.state.plataformas.map(plat =>(
                    <Link to={`/plataforma-games/${plat.id}/${plat.name}`} key={plat.id} className="btn btn-secondary mr-2 mb-2">{plat.name} <span className="badge badge-dark badge-pill">{Intl.NumberFormat('pt-BR', {
                            style: 'decimal'
                        }).format(plat.games_count)}</span></Link>
                ))}
            </div>
        );
    }
}