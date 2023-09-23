import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você pode implementar a lógica de login no Firebase Authentication
    // e redirecionar para a página Principal se o login for bem-sucedido.
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