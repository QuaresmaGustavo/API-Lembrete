import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Lembrete() {

    const [lembretes, setLembretes] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5260/all', {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setLembretes(data);
                }
            } catch (e) {
                alert('Erro na API');
            }
        }
        fetchData();
    }, []);

    const deleteLembrete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5260/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
            if (response.ok) {
                setLembretes(lembretes.filter(lembrete => lembrete.id !== id));
            }
        } catch (e) {
            alert('Erro ao deletar lembrete!');
        }
    }

    const Lembretes = styled.div`
        h2{
            font-weight: 500;
        }

        .material-symbols-outlined {
        font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
    }`;


    const Lembrete = styled.div`
        p{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        #keep{
            margin-left: 1rem;
        }

        label{
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 0rem 0.5rem;
            border-bottom: solid rgba(0, 0, 0, 0.2) 0.1rem;
            font-weight: 500;
            text-transform: uppercase;
            word-break: break-word;
        }`;

    const Button = styled.button`
        border: 1px solid transparent;
        background-color: transparent;

        cursor: pointer;
        
        &: hover {
            color: #EA3323;
            transition: ease-out 300ms;
        }`;

    const agruparPorData = {};

    if (lembretes != '') {
        lembretes.forEach(lembrete => {
            (agruparPorData[lembrete.data]) ? agruparPorData[lembrete.data].push(lembrete) : agruparPorData[lembrete.data] = [lembrete];
        });
    }

    const dataOrdenada = Object.keys(agruparPorData).sort((a, b) => new Date(a) - new Date(b));

    return (
        <Lembretes>
            {dataOrdenada.map((data) => {
                const dataFormatada = new Date(data).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                return (
                    <div key={data}>
                        <h2>{dataFormatada}</h2>
                        {agruparPorData[data].map((lembrete) => (
                            <Lembrete key={lembrete.id}>
                                <p>
                                    <span class="material-symbols-outlined" id="keep">
                                        keep
                                    </span>
                                    <label>{lembrete.nome}</label>
                                    <Button type='submit' onClick={() => deleteLembrete(lembrete.id)}>
                                        <span class="material-symbols-outlined">
                                            delete
                                        </span>
                                    </Button>
                                </p>
                            </Lembrete>
                        ))}
                    </div>
                )
            })}
        </Lembretes>
    )
}

export default Lembrete;