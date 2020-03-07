import React, { useState, useEffect } from 'react';
import {Lista} from './Lista'


export const Component2 = _ => {

    const [nome, setNome] = useState('');
    const [categorias] = useState(['Informatica', 'Redes', 'Adm'])

    useEffect(()=>{
        setTimeout(() => setNome('Leandro'), 3000);
        setTimeout(() => setNome(''), 10000);
    },[]);

    const renderLista = () =>{
        return categorias.map((cat, index) => <Lista key={index} texto={cat} />)
    }

    return (
        <div>
            <h1>Meu Primeiro Nome - {nome}</h1>
            <ul>
                {renderLista()}
            </ul>

        </div>
    );
}