import { useEffect, useState } from 'react';
import { getThings, getTypes } from './api/things';
import './App.scss';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Things from './Components/Things/Things';
import Officials from './Components/Officials/Officials';
import { getOfficials } from './api/users';
import MainForm from './Components/MainForm/MainForm';
import { getUnits } from './api/units';
import { Print } from './Components/Print/Print';
import { useLocaleStorage } from './useLocaleStorage';

const App = () => {
  const [types, setTypes] = useState([]);
  const [isLogged, setIsLogged] = useLocaleStorage('logged', false);
  const [things, setThings] = useState([]);
  const [officials, setOfficials] = useState([]);
  const [units, setUnits] = useState([]);
  const [dataToPrint, setDataToPrint] = useState({});

  const loadTypes = () => {
    getTypes().then(types => {
      if (!('Error' in types)) {
        setTypes(types);
      }
    });
  };

  const loadThings = () => {
    getThings().then(things => {
      if (!('Error' in things)) {
        setThings(things);
      }
    });
  };

  const loadOfficials = () => {
    getOfficials().then(users => {
      if (!('Error' in users)) {
        setOfficials(users);
      }
    });
  };

  const loadUnits = () => {
    getUnits().then(units => {
      if (!('Error' in units)) {
        setUnits(units);
      }
    });
  };

  useEffect(() => {
    loadTypes();
    loadThings();
    loadOfficials();
    loadUnits();
  }, []);

  return (
    <div className="App">
      {isLogged
        ? <>
            <Header handleLogin={setIsLogged} />

            <Routes>
              <Route path="/officials" element={<Officials user={officials} />} />
              <Route path="/things" element={<Things things={things} types={types} />} />
              <Route path="/print" element={<Print data={dataToPrint} />} />
              <Route path="/" element={<MainForm things={things} users={officials} units={units} setData={setDataToPrint}/>} />
            </Routes>
          </> 
        : <Auth handleLogin={setIsLogged} />
      }
    </div>
  );
};

export default App;
