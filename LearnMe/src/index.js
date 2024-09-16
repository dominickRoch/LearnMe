const API_URL = 'http://localhost:"#colocarPorta# API"';

export async function getUsuarios() {
  const response = await fetch(`${URL}/usuarios`);
  const data = await response.json();
  return data;
}

export async function createUsuario(usuario) {
  const response = await fetch(`${URL}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  });
  return await response.json();
}



import React, { useState } from 'react';
import { createUsuario } from '#';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuario = { nome, email, senha };
    await createUsuario(usuario);
    alert('Usuário cadastrado com sucesso');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroUsuario;
