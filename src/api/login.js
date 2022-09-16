export const authorization = (user) => {
  // return fetch('http://localhost:8000/login', {
    return fetch('https://info-serv-utb.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
};