import React, {Component} from "react";
import api from "../../services/api";

export default class Desenvolvedores extends Component {
    state = {
        devs: []
    };

    componentDidMount() {
        this.devList();
    }

    devList = async () => {
        const response = await api.get('developers');
        this.setState({devs: response.data.results});
    }

    render() {
        return (
            <div className="row">
                <div className="w-100">
                    <h1 className="display-4 text-light my-4">Desenvolvedores</h1>
                </div>
                <table className="devs table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Desenvolvedor</th>
                            <th scope="col">Jogos lançados</th>
                            <th scope="col">Top games</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.devs.map(dev => (
                        <tr key={dev.id}>
                            <th scope="row">
                                <a className="text-light" href={`/dev/${dev.id}/${dev.name}`}>{dev.name}</a>
                            </th>
                            <th>{dev.games_count}</th>
                            <th>
                                <div className="btn-group">
                                    {dev.games.map(game => (
                                        <a key={game.id} className="dev-btn btn btn-outline-light btn-sm text-truncate" target="_blank" href={`/game/${game.id}`} title={game.name}>{game.name}</a>
                                    ))}
                                </div>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}