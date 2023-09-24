import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de login no Firebase Authentication
    // e redirecionar para a página Principal se o login for bem-sucedido.
    const firebase = require('firebase/app');
require('firebase/auth');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD059YmR2bWpIt_eM_E8kQzMATPdCtRNtY",
  authDomain: "projetotdw-f3e61.firebaseapp.com",
  projectId: "projetotdw-f3e61",
  storageBucket: "projetotdw-f3e61.appspot.com",
  messagingSenderId: "285916136748",
  appId: "1:285916136748:web:cc09915ff5699dd36d9889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
