import React, { useState } from "react";
import { addThing } from "../../api/things";
import './ThingForm.scss';

const newForm = {
  type_id: 1,
  name: '',
  serial_number: '',
  inventory_number: '',
};

const ThingForm = ({ types, setOpenedForm }) => {
  const [form, setForm] = useState(newForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    addThing(form);

    setOpenedForm(false);
  };

  return (
    <div>
      <form className="thing-form" onSubmit={handleSubmit}>
        <label className="thing-form__label">Обладнання</label>

        <select name="type_id" onChange={(event) => handleChange(event)}>
          {types.map(type => (
            <option key={type._id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>

        <label className="thing-form__label">Назва</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(event) => handleChange(event)}
        />

        <label className="thing-form__label">Серійний номер</label>
        <input
          type="text"
          name="serial_number"
          value={form.serial_number}
          onChange={(event) => handleChange(event)}
        />

        <label className="thing-form__label">Інвентарний номер</label>
        <input
          type="text"
          name="inventory_number"
          value={form.inventory_number}
          onChange={(event) => handleChange(event)}
        />

        <button>Добавити</button>
      </form>
    </div>
  );
};

export default ThingForm;
