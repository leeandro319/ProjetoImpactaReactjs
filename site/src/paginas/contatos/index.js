import React from "react";
import { Cabecalho } from "../../components/cabecalho";
import { ContatoForm } from "./form";

export class Contatos extends React.Component {
  render() {
    return (
      <div>
        <Cabecalho titulo="Contatos" subtitulo="entre em contato" />
        <ContatoForm />
      </div>
    );
  }
}
