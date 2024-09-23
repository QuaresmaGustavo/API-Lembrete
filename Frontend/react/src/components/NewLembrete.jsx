import { useState } from 'react';
import styled from 'styled-components';

const CardLembrete = styled.div`
  position: fixed;
  left: 2rem;
  max-width: 40rem;
  margin: 4rem 0;
  padding: 2rem 2rem;
  border: solid gray 0.1rem;
  border-radius: 1rem;
  background: rgb(47, 152, 194);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);

  h1{
    border-bottom: solid rgba(0, 0, 0, 0.2) 0.1rem;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);

   &:hover {
    background-color: rgb(145, 145, 145);
    transform: scale(1.05);
    transition: ease-out 200ms;
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;`;

const Input = styled.input`
  height: 1.6rem;
  margin-bottom: 1.2rem;
  padding: 0rem 0.5rem;
  background-color: transparent;
  border: transparent;
  border-bottom: solid rgba(0, 0, 0, 0.2) 0.1rem;

  &::placeholder {
    color: black;
  }

  &: focus {
    outline: none;
  }
  `;

function NewLembrete() {

  const [inputData, setInputData] = useState('');
  const [inputNome, setInputNome] = useState('');
  const hoje = new Date().toISOString().split('T')[0];

  const postLembrete = async () => {
    if (inputNome && inputData != '') {
      try {
        await fetch('http://localhost:5260/api/Lembretes', {
          method: 'POST',
          headers: { 'content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            nome: inputNome,
            data: inputData
          }),
        });
        window.location.reload();
      } catch (error) {
        console.error('Erro no POST', error);
      }
    } else {
      alert("Lembrete e/ou data não pode ser vazio!");
    }
  };

  return (
    <CardLembrete>
      <h1>Novo Lembrete</h1>
      <Inputs className="card">
        <Input type="text" placeholder='Lembrete' value={inputNome} onChange={(e) => setInputNome(e.target.value)} />
        <Input type="date" placeholder='Data' value={inputData} onChange={(e) => setInputData(e.target.value)} min={hoje} />
      </Inputs>
      <Button type='submit' onClick={postLembrete}>
        Adicionar
      </Button>
    </CardLembrete>
  )
}

export default NewLembrete;