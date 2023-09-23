import React, { useEffect, useState } from 'react';
import { auth, db } from './firebase'; // Importe suas configurações do Firebase

function Principal() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Verifique se o usuário está autenticado
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Se o usuário estiver autenticado, recupere seus dados do Firestore
        db.collection('usuarios')
          .doc(authUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUsuario(doc.data());
            } else {
              console.log('Documento não encontrado.');
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar dados do Firestore:', error);
          });
      } else {
        // Se o usuário não estiver autenticado, redirecione para a página de login
        // ou qualquer outra ação apropriada.
        console.log('Usuário não autenticado.');
        // Exemplo: redirecionar para a página de login
        // history.push('/login');
      }
    });

    return () => {
      // Limpe o listener quando o componente for desmontado
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>
      {usuario && (
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Sobrenome: {usuario.sobrenome}</p>
          <p>Data de Nascimento: {usuario.dataNascimento}</p>
        </div>
      )}
    </div>
  );
}

export default Principal;