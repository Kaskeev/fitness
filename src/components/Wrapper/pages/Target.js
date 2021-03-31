import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import Title from "../Title/Title";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import styles from "./Target.css";

const activity = [
  {
    value: "low",
    name: "activity", 
    label: "Низкий (не занимаюсь)" 
  },
  {
    value: "middle", 
    name: "activity",
    label: "Средний (1-2 раза в неделю)" 
  },
  {
    value: "high",
    name: "activity",
    label: "Высокий (более 3-х раз в неделю)",
  },
];

export default function Target() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="target">
        <Title title="Уровень активности: " />

        {activity.map((active) => (
          <div className="genderChoice">
            <label className="containerLabel">
              <input
                type="radio"
                name={active.name}
                value={active.value}
                ref={register}
              />
              <span className="checkmark"></span>
              <p>{active.label}</p>
            </label>
          </div>
        ))}

        <Title title="цель на 3 месяца" />

        <input
          name="threeYears"
          className="inputClass"
          ref={register}
          placeholder="Опишите цель"
          type="text"
        />

        <Title title="на 6 месяцев" />

        <input
          name="sixYears"
          className="inputClass"
          ref={register}
          placeholder="Опишите цель"
          type="text"
        />

        <Title title="на 12 месяцев" />

        <input
          name="twelveYears"
          className="inputClass"
          ref={register}
          placeholder="Опишите цель"
          type="text"
        />

        <Title title="Рекомендуемые для посещения групповые программы" />

        <input
          name="recommend"
          className="inputClass"
          ref={register}
          placeholder="Опишите цель"
          type="text"
        />

        <Button />
      </div>
    </form>
  );
}
