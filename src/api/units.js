const reject = {
  Error: 'Something gone wrong',
  status: 418,
};

export const getUnits = () => {
  return fetch('https://info-serv-utb.herokuapp.com/getUnits')
  // return fetch('http://localhost:8000/getUnits')
    .then(res => res.json())
    .catch(() => reject);
};
