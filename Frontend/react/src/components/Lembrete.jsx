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
                window.location.reload();
            }
        } catch (e) {
            alert('Erro ao deletar lembrete!');
        }
    }

    const Lembrete = styled.div`
        label{
            padding-left: 4rem;
        }`;

    const Button = styled.button`
    border-radius: 50%;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    background-color: #db1d1d;
    margin-left: 0.5rem;
    cursor: pointer;
    transition: border-color 0.25s`;

    const agruparPorData = {};

        if(lembretes != ''){
            lembretes.forEach(lembrete => {
                if (agruparPorData[lembrete.data]) {
                    agruparPorData[lembrete.data].push(lembrete);
                } else {
                    agruparPorData[lembrete.data] = [lembrete];
                }
            });
        }

        const dataOrdenada = Object.keys(agruparPorData).sort((a, b) => new Date(a) - new Date(b));

    return (
        <Lembrete>
            {dataOrdenada.map((data)=>(
                <div key={data}>
                <h2>{data}</h2>
                {agruparPorData[data].map((lembrete) => (
                    <div key={lembrete.id}>
                        <p>
                            <label>{lembrete.nome}</label>
                            <Button type='submit' onClick={() => deleteLembrete(lembrete.id)}>x</Button>
                        </p>
                    </div>
                ))}
            </div>
            ))}
        </Lembrete>
    )
}

export default Lembrete;