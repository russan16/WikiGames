import React, {Component} from "react";
import api from "../../services/api";

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
                    <a href={`/plataforma-games/${plat.id}/${plat.name}`} className="btn btn-secondary mr-2 mb-2">{plat.name} <span className="badge badge-primary badge-pill">{plat.games_count}</span></a>
                ))}
            </div>
        );
    }
}