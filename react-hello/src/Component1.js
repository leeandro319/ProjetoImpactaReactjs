import React from 'react';

import {Lista} from './Lista'

export class Component1 extends React.Component {
    estadoInicial = {
        nome: '',
        idade: '',
        nascimento: '',
        categorias: ['Informatica', 'Redes', 'Adm']
    }

    state = this.estadoInicial;

    limpar() {
        this.setState(this.estadoInicial)
    }

    componentDidMount() {
        setTimeout(_ => this.setState({ ...this.state, nome: 'Leandro' }), 3000);
        setTimeout(_ => this.limpar(), 10000);
    }

    render() {
        return (
            <div>
                <h1>{this.state ? this.state.nome : ''}</h1>
                <ul>
                    {this.state.categorias.map((cat, index) => <Lista key={index} texto={cat} />)}
                </ul>
            </div>
        )
    }
}