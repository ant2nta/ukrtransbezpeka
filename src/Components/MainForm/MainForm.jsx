import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './MainForm.scss';

const MainForm = ({ things, users, units, setData }) => {
  const [choosed, setChoosed] = useState({
      unit: 0,
      from: [],
      to: [],
      thing: [],
  });

  useEffect(() => setData(choosed), [choosed]);

  return (
    <div className="main">
      <form className="main__form">
        <h1 className="main__title">Форма видачі</h1>
        <p className="main__info">Усі поля форми є обов'язковими</p>
        
        <div className="main__lables">
          <label className="main__label" htmlFor="city">Відділ у  

            <select id="city" onChange={(event) => setChoosed({...choosed, unit: event.target.value})}>
              <option>Оберіть відділ</option>
              {units.map(el => (
                <option key={el._id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>

          області
          </label>

          <br />

          <label className="main__label" htmlFor="from">Передає 
            <select id="from" onChange={(event) => setChoosed({...choosed, from: event.target.value})}>
              <option>Оберіть відправника</option>
              {users.map(el => (
                <option key={el._id} value={[el.position, el.pib]}>
                  {`${el.position} ${el.pib}`}
                </option>
              ))}
            </select>
          </label>

          <br />

          <label className="main__label" htmlFor="to">Приймає
            <select id="to" onChange={(event) => setChoosed({...choosed, to: event.target.value})}>
              <option>Оберіть отримувача</option>
              {users.map(el => (
                <option key={el._id} value={[el.position, el.pib]}>
                  {`${el.position} ${el.pib}`}
                </option>
              ))}
            </select>
          </label>

          <br />

          <label className="main__label" htmlFor="what">Матеріальну цінність
            <select id="what" onChange={(event) => setChoosed({...choosed, thing: event.target.value})}>
              <option>Оберіть обладнання</option>
              {things.map(el => (
                <option key={el._id} value={[el.name, el.serial_number, el.inventory_number]}>
                  {el.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <br />

        <Link to="/print">
          <button>На друк</button>
        </Link>
      </form>
    </div>
  );
};

export default MainForm;
