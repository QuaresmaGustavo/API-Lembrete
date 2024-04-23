import { useState } from 'react';
import styled from 'styled-components';

const CardLembrete = styled.div`
max-width:40rem;
margin: 4rem 0;
padding: 2rem 2rem;
border: solid gray 0.1rem;
border-radius: 1rem;

h1{
  border-bottom: solid gray 0.1rem;
}
`;

const Button = styled.button`
border-radius: 8px;
border: 1px solid transparent;
font-size: 1em;
font-weight: 500;
background-color: #db1d1d;
cursor: pointer;
transition: border-color 0.25s;
`;

const Inputs = styled.div`
display: flex;
flex-direction: column;

input{
  height: 1.6rem;
  margin-bottom: 1.2rem;
}`;

const Input = styled.input`
  height: 1.6rem;
  margin-bottom: 1.2rem;`;

function NewLembrete() {

  const [inputData, setInputData] = useState('');
  const [inputNome, setInputNome] = useState('');

  const valueInputNome = (e) => {
    setInputNome(e.target.value);
  };

  const hoje = new Date().toISOString().split('T')[0];

  const valueInputData = (e) => {
    setInputData(e.target.value);
  };

  const postLembrete = async () => {
    if (inputNome && inputData != '') {
      try {
        const response = await fetch('http://localhost:5260/insert', {
          method: 'POST',
          headers: { 'content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            nome: inputNome,
            data: inputData
          }),
        });

        if (!response.ok) {
          alert('Erro ao enviar os dados');
        }
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
        <Input type="text" placeholder='Lembrete' value={inputNome} onChange={valueInputNome} />
        <Input type="date" placeholder='Data' value={inputData} onChange={valueInputData} min={hoje}/>
      </Inputs>
      <Button type='submit' onClick={postLembrete}>
        Criar
      </Button>
    </CardLembrete>
  )
}

export default NewLembrete;