import React, {Component} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import noImg from '../../imgs/no-image.jpg';

export default class Interna extends Component {
    state = {
        product: {},
        generos: [{name: ""}],
        devs: [{name: ""}],
        platforms: []
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = await api.get(`games/${id}`);

        this.setState({product: response.data});
        this.setState({generos: this.state.product.genres});
        this.setState({devs: this.state.product.developers});
        this.setState({platforms: this.state.product.platforms});
    };

    render() {
        const {product} = this.state;

        //console.log(Intl.DateTimeFormat('pt-BR').format(new Date(product.released)));
        console.log('Data',product.released);

        return (
            <div className="game-info">
                <h1 className="display-3 text-light w-100 text-center mt-5 mb-3">{product.name}</h1>
                <div className="text-light">
                    <figure className="img-thumbnail img-info float-md-left mr-md-4 mr-0">
                        <img src={(product.background_image_additional) ? product.background_image_additional: noImg} alt={product.name}/>
                    </figure>
                    <p>{product.description_raw}</p>
                    <ul className="list-unstyled">
                        <li>Lançamento: <strong>{(product.released) ? Intl.DateTimeFormat('pt-BR').format(new Date(product.released)):'ND'}</strong></li>
                        <li>Nota: <strong>{product.rating}</strong></li>
                        <li>
                            <span className="mr-2">Generos: </span>
                            {this.state.generos.map(elements => (
                                <Link key={elements.name} to={`/genero/${elements.id}/${elements.name}`} className="badge badge-pill badge-warning mr-2">{elements.name}</Link>
                            ))}
                        </li>
                        <li>
                            <span className="mr-2">Desenvolvido por: </span>
                            {this.state.devs.map(elements => (
                                <Link key={elements.name} to={`/dev/${elements.id}/${elements.name}`} className="badge badge-pill badge-secondary mr-2">{elements.name}</Link>
                            ))}
                        </li>
                        <li>
                            <span className="mr-2">Plataformas: </span>
                            {this.state.platforms.map(elements => (
                                <Link key={elements.platform.name} to={`/plataforma-games/${elements.platform.id}/${elements.platform.name}`}
                                      className="badge badge-secondary badge-pill mr-2">{elements.platform.name}</Link>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};