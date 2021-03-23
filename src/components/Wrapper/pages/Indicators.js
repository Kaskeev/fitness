import React from 'react';
import {useForm} from "react-hook-form";
import Checkbox from '../Checkbox/Checkbox'
import Select from '../Select/Select'
import styles from "./Indicators.css"
import DataInd from "../DataInd/DataInd";
import Button from "../Button/Button";

const optionsSecond = [
    {
      label: "Начальный показатель",
      value: "Начальный показатель",
    },
    {
      label: "Средний показатель",
      value: "Средний показатель",
    },
    {
      label: "Последний показатель",
      value: "Последний показатель",
    }
  ];

export default function Indicators() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
            <div className="selectInd">
                <div className="selectDrop"> 
                <div className="dropdown">
                    <div className="dropdownSelect">
                        <select name="value" className="format" ref={register}>
                        {optionsSecond.map((option) => (
                        <option value={option.value} >{option.label}</option>
                        ))} 
                        </select>
                    </div>
                </div>
                </div>
            </div>
            <div className="data">
                <DataInd indicator="1.Вес(кг)"/>
                    <input ref={register} name="1" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="2.Оценка InBody"/>
                    <input ref={register} name="2" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="3.ИМТ" />
                    <input ref={register} name="3" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd  indicator="4.Оценка физ.активности"  />
                    <input ref={register} name="4" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="5.Объем груди"/>
                    <input ref={register} name="5" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="6.Объем талии"  />
                    <input ref={register} name="6" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="7.Объем бедер"/>
                    <input ref={register} name="7" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd indicator="8.Объем бедра" />
                    <input ref={register} name="8" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
            <div className="data">
                <DataInd  indicator="9.Объем плеча"  />
                    <input ref={register} name="9" className="inputElem" placeholder="00.00"  type="number" step=".01" max="" min="0"/>
            </div>
                <Button/>
            </form>
        </div>
    )
}
  