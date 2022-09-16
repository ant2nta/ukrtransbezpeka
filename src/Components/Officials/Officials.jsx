import React, { useEffect, useState } from "react";
import OfficialForm from "../OfficialForm/OfficialForm";
import "./Officials.scss";

const Officials = ({ user }) => {
  const [filter, setFilter] = useState(0);
  const [visibleUsers, setVisibleUsers] = useState(user);
  const [openedForm, setOpenedForm] = useState(false);

  useEffect(() => {
    if (+filter === 0) {
      setVisibleUsers(user);
    } else {
      setVisibleUsers(user.filter(el => el.role === filter))
    }
  }, [filter]);

  return (
    <div className="flex">
      <div className="things">
        <div className="things__buttons">
          <select onChange={(event) => setFilter(event.target.value)}>
            <option value={0}>Усі користувачі</option>

            <option value={'інспектор'}>Інспектори</option>

            <option value={'відповідальна особа'}>Відповідальні особи</option>
          </select>

          <button className="things__add" onClick={() => setOpenedForm(!openedForm)}>
            {openedForm ? 'x' : '+'}
          </button>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Роль</th>
              <th>Посада</th>
              <th>ПІБ</th>
            </tr>
          </thead>
          <tbody>

          {visibleUsers.map(user => (
              <tr className="things__item" key={user._id}>
                <td>{user.role}</td>
                <td>{user.position}</td>
                <td>{user.pib}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openedForm && <OfficialForm setOpenedForm={setOpenedForm} />}
    </div>
  );
};

export default Officials;
