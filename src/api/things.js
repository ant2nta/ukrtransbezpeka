const reject = {
  Error: 'Something gone wrong',
  status: 418,
};

export const getTypes = () => {
  return fetch('https://info-serv-utb.herokuapp.com/thingTypes')
  // return fetch('http://localhost:8000/thingTypes')
    .then(res => res.json())
    .catch(() => reject);
};

export const addThing = (thing) => {
  return fetch('https://info-serv-utb.herokuapp.com/addThing', {
    // return fetch('http://localhost:8000/addThing', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(thing),
  });
};

export const getThings = () => {
  return fetch('https://info-serv-utb.herokuapp.com/getThings')
  // return fetch('http://localhost:8000/getThings')
    .then(res => res.json())
    .catch(() => reject);
};
