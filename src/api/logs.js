const reject = {
  Error: 'Something gone wrong',
  status: 418,
};

export const getLogs = () => {
  return fetch('https://info-serv-utb.herokuapp.com/getLogs')
  // return fetch('http://localhost:8000/getLogs')
    .then(res => res.json())
    .catch(() => reject);
};

export const addLogs = (log) => {
  return fetch('https://info-serv-utb.herokuapp.com/addLogs', {
    // return fetch('http://localhost:8000/addLogs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(log),
  });
};