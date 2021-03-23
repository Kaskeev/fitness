import React, { Component } from 'react'
import styles from "./DataClient.css";
import vector from "../images/Vector.png";
import Input from "../Input/Input";
import Title from '../Title/Title';


export default function DataClient() {
    return (
        <div>
        <div className="growthWeight">
        <label className="growth">
            <Title title="Рост (см)"/>
            <Input className="input inputGrowth" name="Укажите рост" type="number"/>
        </label>
        <label className="weight">
            <Title title="Вес (кг)"/>
            <Input className="input inputWeight" name="Укажите вес" type="number"/>
        </label>
        </div>
        <label className="desiredWeight">
            <Title title="Желаемый вес (кг)"/>
            <Input  name="Укажите вес" type="number"/>
        </label>
        <label className="desiredWeight">
            <div className="flexBlock">
            <Title title="Противопоказания"/>
            <div className="tooltip">
                <img className="imgQuest" src={vector}/>
                <span class="tooltiptext">Tooltip text</span>
            </div>
            </div>
            <Input name="Укажите противопоказания"/>
        </label>
        <label className="desiredWeight">
        <div className="flexBlock">
           <Title title="рекомендуемые посещений в неделю"/>
            <div className="tooltip">
                <img className="imgQuest" src={vector}/>
                <span class="tooltiptext">Подсказки</span>
            </div>
            </div>
            <Input className="input" name="Укажите противопоказания" type="number"/>
        </label>
    </div>
    )
}
