import React from "react";
import styled from "styled-components";

import Lembrete from './Lembrete.jsx'

export default function ListaLembrete(){

    const ListaLembrete = styled.div`
        max-width:40rem;
        margin: 4rem 0;
        padding: 2rem 2rem;
        border: solid gray 0.1rem;
        border-radius: 1rem;

        h1{
            border-bottom: solid gray 0.1rem;
        }
    `;

    return(
        <ListaLembrete>
            <h1>Lista de lembrete</h1>
            <Lembrete/>
        </ListaLembrete>
    )
}