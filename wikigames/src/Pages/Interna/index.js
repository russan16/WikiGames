import React, {Component} from "react";
import api from "../../services/api";

export default class Interna extends Component {
    state = {
        product: {},
        generos: [{name:""}],
        devs: [{name:""}]
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        const response = await api.get(`games/${id}`);

        this.setState({product: response.data});
        this.setState({generos: this.state.product.genres});
        this.setState({devs: this.state.product.developers});
    };

    render() {
        const {product} = this.state;

        return (
            <div className="game-info">
                <h1 className="display-3 text-light w-100 text-center mt-5 mb-3">{product.name}</h1>
                <div className="text-light">
                    <figure className="img-thumbnail img-info float-left mr-4">
                        <img src={product.background_image_additional} alt={product.name}/>
                    </figure>
                    <p>{product.description_raw}</p>
                    <ul className="list-unstyled">
                        <li>Lançamento: <strong>{product.released}</strong></li>
                        <li>Nota: <strong>{product.rating}</strong></li>
                        <li>
                            <span className="mr-2">Generos: </span>
                            {this.state.generos.map(elements => (
                                <span className="badge badge-pill badge-warning mr-2">{elements.name}</span>
                            ))}
                        </li>
                        <li>
                            <span className="mr-2">Desenvolvido por: </span>
                            {this.state.devs.map(elements => (
                                <span className="badge badge-pill badge-secondary mr-2">{elements.name}</span>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};