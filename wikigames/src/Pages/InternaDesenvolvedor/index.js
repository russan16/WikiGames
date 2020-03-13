import React, {Component} from "react";
import api from "../../services/api";

export default class InternaDesenvolvedor extends Component {
    state = {
        devInfo: [],
        devNamed: ''
    }

    componentDidMount() {
        this.devListInfo();
    }

    devListInfo = async () => {
        const {devSlug} = this.props.match.params;
        const {devName} = this.props.match.params;
        const response = await api.get(`games?developers=${devSlug}`);
        this.setState({devInfo: response.data.results});
        this.setState({devNamed: devName});
    }

    render() {
        return (
            <div className="w-100">
                <div className="w-100">
                    <h1 className="text-light display-4 my-4">{this.state.devNamed}</h1>
                </div>

                <div className="row">
                    {this.state.devInfo.map(info =>(
                        // LOOP DE ITENS
                        <div key={info.id} className="card bg-transparent rounded-0 border-secondary col-6 col-md-4 col-lg-2">
                            <div className="card-body">
                                <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                    <img className="card-img-top img-fluid" src={info.background_image} alt="Card image cap"/>
                                </figure>
                                <h5 className="card-title text-light">{info.name}</h5>
                                <p className="card-text text-light">Nota: {info.rating}</p>
                                <p className="card-text text-light">Lançamento: {info.released}</p>
                                <div className="w-100 my-3">
                                    <span className="mr-2 text-light">Generos:</span>
                                    {info.genres.map(element => (
                                        <span key={element.name} className="badge badge-secondary mr-2">{element.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-100 mb-3">
                                <a href={`/game/${info.id}`} className="btn btn-info btn-block" target="_blank">Ver mais</a>
                            </div>
                        </div>
                        // LOOP DE ITENS
                    ))}
                </div>
            </div>
        );
    }
}