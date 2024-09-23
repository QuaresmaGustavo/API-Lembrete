import React from "react";
import styled from "styled-components";

import Lembrete from './Lembrete.jsx'

export default function ListaLembrete(){

    const ListaLembrete = styled.div`
        width: 30rem;
        margin: 4rem 0;
        padding: 2rem 2rem;
        border: solid gray 0.1rem;
        border-radius: 1rem;
        background: rgb(5, 197, 133);
        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

        h1{
            display: flex;
            justify-content: center;
            border-bottom: solid rgba(0, 0, 0, 0.2) 0.1rem;
        }
    `;

    return(
        <ListaLembrete>
            <h1>Lista de lembrete</h1>
            <Lembrete/>
        </ListaLembrete>
    )
}