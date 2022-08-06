export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = (response) => {
  console.log(response)
  return response.ok ? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));
};

const headers = {
  'Content-Type': 'application/json',
};

export const register = ({ password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ password, email }),
    mode:'cors'
  })
    .then(res => checkResponse(res))
    .catch(err => console.log(checkResponse(err)));

};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ password, email }),
  })
    .then(res => {checkResponse(res)});
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(res => checkResponse(res));
};