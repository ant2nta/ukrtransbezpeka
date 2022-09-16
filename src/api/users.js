const reject = {
  Error: 'Something gone wrong',
  status: 418,
};

export const getOfficials = () => {
  return fetch('https://info-serv-utb.herokuapp.com/getOfficials')
  // return fetch('http://localhost:8000/getOfficials')
    .then(res => res.json())
    .catch(() => reject);
};

export const addOfficial = (user) => {
  return fetch('https://info-serv-utb.herokuapp.com/addOfficial', {
    // return fetch('http://localhost:8000/addOfficial', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(user),
  });
};