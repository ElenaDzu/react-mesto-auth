export const BASE_URL = 'https://auth.nomoreparties.co';




const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ email, password })
    
  })  .then((response) => {
    return response.json();
  })
  
  .then((res) => {
    
    return res;
  })
  .catch((err) => console.log(err));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};