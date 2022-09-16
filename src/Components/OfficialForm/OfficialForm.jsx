import React, { useState } from "react";
import { addOfficial } from "../../api/users";
import './OfficialForm.scss';

const newForm = {
  role: 'інспектор',
  position: '',
  pib: '',
};

const OfficialForm = ({ setOpenedForm }) => {
  const [form, setForm] = useState(newForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    addOfficial(form);
    setOpenedForm(false);
  };

  return (
    <div>
      <form className="thing-form" onSubmit={handleSubmit}>
        <label className="thing-form__label">Роль</label>

        <select name="role" onChange={(event) => handleChange(event)}>
            <option value={'інспектор'}>Інспектор</option>

            <option value={'відповідальна особа'}>Відповідальна особа</option>
        </select>

        <label className="thing-form__label">Посада</label>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={(event) => handleChange(event)}
        />

        <label className="thing-form__label">ПІБ</label>
        <input
          type="text"
          name="pib"
          value={form.pib}
          onChange={(event) => handleChange(event)}
        />

        <button>Добавити</button>
      </form>
    </div>
  );
};

export default OfficialForm;
