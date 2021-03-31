import React from "react";
import Input from "../Input/Input";
import Title from "../Title/Title";
import Select from "../Select/Select";
import vector from "../images/Vector.png";
import Button from "../Button/Button";
import styles from "./CoachClient.css";

const fields = [
  {
    name: "coach",
    label: "Тренер",
    type: "text",
    placeholder: "Введите имя тренера",
  },
  {
    name: "client",
    label: "Клиента",
    type: "text",
    placeholder: "Введите ФИО",
  },
];
const content = [
  {
    name: "number",
    label: "Телефон",
    type: "number",
    placeholder: "Номер телефона",
  },
  {
    name: "age",
    label: "Телефон",
    type: "number",
    placeholder: "Введите ваш возраст",
  },
  {
    name: "desiredWeight",
    label: "Телефон",
    type: "number",
    placeholder: "Укажите вес",
  },
  {
    name: "contraindications",
    label: "Телефон",
    type: "text",
    placeholder: "Укажите противопоказания",
  },
  {
    name: "recVisits",
    label: "Телефон",
    type: "number",
    placeholder: "Укажите противопоказания",
  },
];
const check = [
  { name: "gender", value: "male", label: "Мужчина", type: "checkbox" },
  { name: "gender", value: "female", label: "Женщина", type: "checkbox" },
];
const options = [
  {
    label: "Telegram",
    value: "Telegram",
  },
  {
    label: "Whatsapp",
    value: "Whatsapp",
  },
  {
    label: "Viber",
    value: "Viber",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
];

export default function CoachClient() {

  const [form, setForm] = React.useState({
    coach: "",
    client: "",
    number: "",
    age: "",
    desiredWeight: "",
    contraindications: "",
    recVisits: "",
    check: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      {fields.map((field) => (
        <div className="coachClient" key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            className="coach input"
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
          />
        </div>
      ))}

      <div className="contactBlock">
        <Title title="Телефон" />
        <div className="contactSelect">
          <Select className="dropdownMenu" label={options} />
          <label className="numberBlock">

            <Input
              className="inputNum input"
              type={content[0].type}
              name={content[0].name}
              placeholder={content[0].placeholder}
              value={form[content[0].name]}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="ageGender">
        <div className="Age">
          <p className="title">возраст</p>
          <label>

            <Input
              className="input inputAge"
              name="Ваш возраст"
              type={content[1].type}
              name={content[1].name}
              placeholder={content[1].placeholder}
              value={form[content[1].name]}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="genderCheck">
          {check.map((checkbox) => (
            <div>
              <label className="containerLabel">
                <input
                  type="radio"
                  name={checkbox.name}
                  value={checkbox.value}
                />
                <span className="checkmark"></span>
                <p>{checkbox.label}</p>
              </label>
            </div>
          ))}
        </div>
      </div>

      <label className="desiredWeight">
        <Title title="Желаемый вес (кг)" />
        <Input
          name="Укажите вес"
          name="Ваш возраст"
          type={content[2].type}
          name={content[2].name}
          placeholder={content[2].placeholder}
          value={form[content[2].name]}
          onChange={handleChange}
        />
      </label>

      <label className="desiredWeight">
        <div className="flexBlock">
          <Title title="Противопоказания" />
          <div className="tooltip">
            <img className="imgQuest" src={vector} />
            <span class="tooltiptext">Tooltip text</span>
          </div>
        </div>

        <Input
          name="Укажите противопоказания"
          name="Ваш возраст"
          type={content[3].type}
          name={content[3].name}
          placeholder={content[3].placeholder}
          value={form[content[3].name]}
          onChange={handleChange}
        />
      </label>

      <label className="desiredWeight">
        <div className="flexBlock">
          <Title title="рекомендуемые посещений в неделю" />
          <div className="tooltip">
            <img className="imgQuest" src={vector} />
            <span class="tooltiptext">Tooltip text</span>
          </div>
        </div>

        <Input
          className="input"
          name="Укажите противопоказания"
          name="Ваш возраст"
          type={content[4].type}
          name={content[4].name}
          placeholder={content[4].placeholder}
          value={form[content[4].name]}
          onChange={handleChange}
        />
      </label>

      <Button type="submit" />

    </form>
  );
}
