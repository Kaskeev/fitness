import React, { Component } from 'react'
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import styles from "./Age.css";

export default function Age() {
    return (
        <div className="ageGender">
         <div className="Age">
              <p className="title">
              возраст 
            </p>
                <label>
                    <Input className="input inputAge" name="Ваш возраст" type="number"/>
                </label>
            </div>
            <div className="genderCheck">
                <Checkbox titleName="Мужчина"/>
                <Checkbox titleName="Женщина"/>
            </div>
        </div>
    )
}
