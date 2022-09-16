import React, { useEffect, useState } from "react";
import ThingForm from "../ThingForm/ThingForm";
import "./Things.scss";

const Things = ({ things, types }) => {
  const [filter, setFilter] = useState(0);
  const [visibleThings, setVisibleThings] = useState(things);
  const [openedForm, setOpenedForm] = useState(false);

  useEffect(() => {
    if (+filter === 0) {
      setVisibleThings(things);
    } else {
      setVisibleThings(things.filter(el => +el.type_id === +filter))
    }
  }, [filter]);

  return (
    <div className="flex">
      <div className="things">
        <div className="things__buttons">
          <select onChange={(event) => setFilter(event.target.value)}>
            <option value={0}>Все обладнання</option>
            {types.map(type => (
              <option key={type._id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>

          <button className="things__add" onClick={() => setOpenedForm(!openedForm)}>
            {openedForm ? 'x' : '+'}
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Обладнання</th>
              <th>Назва</th>
              <th>Серійний номер</th>
              <th>Інвентарний номер</th>
            </tr>
          </thead>
          <tbody>

          {visibleThings.map(thing => (
              <tr className="things__item" key={thing._id}>
                <td>{types.find(el => +el.id === +thing.type_id).name}</td>
                <td>{thing.name}</td>
                <td>{thing.serial_number}</td>
                <td>{thing.inventory_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openedForm && <ThingForm types={types} setOpenedForm={setOpenedForm} />}
    </div>
  );
};

export default Things;
