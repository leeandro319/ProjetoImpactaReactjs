import React from 'react';
import {Cabecalho} from '../../components/cabecalho'
import { CadastroCursos } from './cadastro';

export class Cursos extends React.Component {
    render(){
        return(
            <div>
                 <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos"/>
                 <CadastroCursos/>
            </div>
        );
    }
}