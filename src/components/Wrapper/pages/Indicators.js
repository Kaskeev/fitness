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
const indicators = [
    {
      label: "Вес(кг)",
      value: "weight",
    },
    {
      label: "Рост(см)",
      value: "growth",
    },
    {
      label: "Оценка InBody",
      value: "inBody",
    },
    {
      label: "Процент жировой массы (%)",
      value: "fatMass",
    },
    {
      label: "Процент мышечной массы (%)",
      value: "muscleMass",
    },
    {
      label: "Уровень висцерального жира",
      value: "visceralFat",
    },
    {
      label: "ИМТ",
      value: "imt",
    },
    {
      label: "Обьем низ живота",
      value: "lowerAbdomen",
    },
    {
      label: "Оценка физ.активности",
      value: "physAkt",
    },
    {
      label: "Обхват плеч",
      value: "shoulderGirth",
    },
    {
      label: "Объем груди",
      value: "breast",
    },
    {
      label: "Объем талии",
      value: "waist",
    },
    {
      label: "Объем бедер",
      value: "hips",
    },
    {
      label: "Объем плеча",
      value: "shoulderVolume",
    },
    {
      label: "Объем руки (бицепс) левая рука",
      value: "leftBiceps",
    },
    {
        label: "Объем руки (бицепс) правая рука",
        value: "rightBiceps",
    },
    {
      label: "Объем голени (Икры) левая",
      value: "leftShin",
    },
    {
      label: "Объем голени (Икры) правая",
      value: "rightShin",
    },
    {
      label: "Объем бедра левое",
      value: "leftHip",
    },
    {
      label: "Объем бедра правое",
      value: "rightHip",
    }
  ];

export default function Indicators( ) {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };
    let num = 0;
    let number = num
    return (
        <div>
            
             <form onSubmit={handleSubmit(onSubmit)}>
            <div className="selectInd">
                <div className="selectDrop"> 
                <div className="dropdown">
                    <div className="dropdownSelect">
                        <select name="value" className="format" ref={register}>
                        {optionsSecond.map((option) => (
                        <option className="option" value={option.value}>{option.label}</option>
                        ))} 
                        </select>
                    </div>
                </div>
                </div>
            </div>
            <div>
                   
                {indicators.map((indicator) => (
                  
                             <div className="data">
                            <DataInd indicator={`${++number}.` +  indicator.label}></DataInd>
                             <input 
                                className="inputElem"
                                ref={register} 
                                name={indicator.value}
                                placeholder="00.00"  
                                type="number" 
                                step=".01" 
                                max="" min="0"/>
                             </div>
                        ))} 
            </div>
                <Button/>
            </form>
        </div>
    )
}
  