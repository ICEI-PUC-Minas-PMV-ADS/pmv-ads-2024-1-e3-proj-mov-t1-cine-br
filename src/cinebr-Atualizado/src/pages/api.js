const BASE_URL = 'https://json-server-project-aqiv.onrender.com';

export const createUser = async (nome, email, senha) => {
  const endpoint = `${BASE_URL}/users`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, senha })
    });

    if (!response.ok) {
      throw new Error('Erro ao criar usuário: ' + response.status);
    }
    
    const data = await response.json();

    if (!data) {
      throw new Error('Resposta da API vazia.');
    }

    console.log('Dados recebidos:', data);

    return data;
  } catch (error) {
    console.error('Erro ao fazer solicitação POST:', error);
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};
