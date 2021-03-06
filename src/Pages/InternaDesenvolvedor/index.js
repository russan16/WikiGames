import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import noImg from '../../imgs/no-image.jpg';

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

                <div className="row mx-0">
                    {this.state.devInfo.map(info => (
                        // LOOP DE ITENS
                        <div key={info.id} className="card bg-transparent rounded-0 border-secondary col-12 col-md-4 col-lg-3">
                            <div className="card-body">
                                <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                    <img className="card-img-top img-fluid" src={(info.background_image) ? info.background_image : noImg} alt={info.name}/>
                                </figure>
                                <h5 className="card-title text-light">{info.name}</h5>
                                <p className="card-text text-light">Nota: {info.rating}</p>
                                <p className="card-text text-light">Lançamento: {(info.released) ? Intl.DateTimeFormat('pt-BR').format(new Date(info.released)):'ND'}</p>
                                <div className="w-100 my-3">
                                    <span className="mr-2 text-light">Generos:</span>
                                    {info.genres.map(element => (
                                        <a href={`/genero/${element.id}/${element.name}`} key={element.name} className="badge badge-secondary mr-2">{element.name}</a>
                                    ))}
                                </div>
                                <div className="w-100">
                                    <span className="mr-2 text-light">Plataformas:</span>
                                    {info.platforms.map(plataforma => (
                                        <a href={`/plataforma-games/${plataforma.platform.id}/${plataforma.platform.name}`} key={plataforma.platform.id} className="badge badge-secondary mr-2">{plataforma.platform.name}</a>
                                    ))}
                                </div>
                            </div>

                            <div className="w-100 mb-3">
                                <Link to={`/game/${info.id}`} className="btn btn-info btn-block">Ver mais</Link>
                            </div>
                        </div>
                        // LOOP DE ITENS
                    ))}
                </div>
            </div>
        );
    }
}