import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de login no Firebase Authentication
    // e redirecionar para a página Principal se o login for bem-sucedido.
    const firebase = require('firebase/app');
require('firebase/auth');

// Configure o Firebase com as configurações do seu projeto
const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_DOMÍNIO.firebaseapp.com',
  projectId: 'SEU_PROJETO_ID',
  storageBucket: 'SEU_BUCKET.appspot.com',
  messagingSenderId: 'SEU_SENDER_ID',
  appId: 'SEU_APP_ID',
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Função para lidar com o login
const handleLogin = async (email, senha) => {
  try {
    // Faça login com email e senha
    await firebase.auth().signInWithEmailAndPassword(email, senha);

    // Se o login for bem-sucedido, redirecione para a página Principal
    window.location.href = 'pagina-principal.html';
  } catch (error) {
    console.error('Erro ao fazer login: ', error.message);
  }
};

// Exemplo de uso da função
const email = 'seuemail@example.com';
const senha = 'suasenha';

handleLogin(email, senha);
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
    </div>
  );
}

export default Login;
