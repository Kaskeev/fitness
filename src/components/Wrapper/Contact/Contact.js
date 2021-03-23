import React, { Component } from 'react'
import styles from "../Contact/Contact.css"
import Input from '../Input/Input'
import Select from '../Select/Select'
import Title from '../Title/Title'

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

export default function Contact() {
    return (
        <div className="contactBlock">
        <Title title="Телефон"/>
        <div className="contactSelect">
         <Select  className="dropdownMenu" label={options} />
            <label className="numberBlock">
                <Input className="inputNum input" name="Номер телефона" type="number"/ >
        </label>
        </div>
    </div>  
    )
}


