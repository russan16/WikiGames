import React, {Component} from "react";
import api from "../../services/api";

export default class Busca extends Component {
    state = {
        textSearch: '',
        result: [],
        buscaAtiva: false,
        empty: false
    }

    firstPrint = async () => {
        const response = await api.get(`games?search=${this.state.textSearch}`);
        this.setState({result: response.data.results});

        if (this.state.result.length == 0) {
            this.setState({empty:true});
        } else {
            this.setState({empty:false});
        }
    };

    startSearch = () => {
        this.setState({buscaAtiva: true});
        const inputSearch = document.getElementById('search_input').value;
        if (inputSearch !== '') {
            this.state.textSearch = inputSearch;
            this.firstPrint();
        }
    };

    keyPressed = (event) => {
        if (event.key === 'Enter') {
            this.startSearch();
        }
    }


    render() {
        return (
            <div className="w-100">
                <div className="search-wrapper">
                    <div className="input-group">
                        <input id="search_input" type="text" onKeyPress={this.keyPressed} className="form-control form-control-lg" placeholder="Digite o nome de um jogo" aria-label="Text input with segmented dropdown button"/>
                    </div>
                </div>
                <div className={this.state.buscaAtiva ? 'd-none' : 'alert alert-info text-center mt-5'}>
                    <strong>Faça uma busca e deixe com a gente.</strong>
                </div>
                <div className={this.state.empty ? 'alert alert-danger text-center mt-5': 'd-none'}>
                    <strong>Nenhum resultado encontrado para <span className="text-uppercase">"{this.state.textSearch}"</span></strong>
                </div>
                <div className={this.state.buscaAtiva ? 'w-100 mt-5 row mb-5' : 'd-none'}>
                    {this.state.result.map(games => (
                        // CARD OBJ
                        <div key={games.id} className="card bg-transparent rounded-0 border-secondary col-6 col-md-4 col-lg-2">
                            <div className="card-body">
                                <figure className="figure card-figure d-flex justify-content-center align-items-center">
                                    <img className="card-img-top img-fluid" src={games.background_image} alt={games.name}/>
                                </figure>
                                <h5 className="card-title text-light">{games.name}</h5>
                                <p className="card-text text-light">Nota: {games.rating}</p>
                                <p className="card-text text-light">Lançamento: {games.released}</p>
                                <div className="w-100 my-3">
                                    <span className="mr-2 text-light">Generos:</span>
                                    {games.genres.map(element => (
                                        <span key={element.name} className="badge badge-secondary mr-2">{element.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-100 mb-3">
                                <a href={`game/${games.id}`} className="btn btn-info btn-block" target="_blank">Ver mais</a>
                            </div>
                        </div>
                        // /CARD OBJ
                    ))};
                </div>
            </div>
        );
    }
};