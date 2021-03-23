import React, { Component } from 'react'
import styled from "../Select/Select.css"

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

export default function Select(props) {
    return (
        <div className="dropdown">
        <div className="dropdownSelect">
            <select name="format" className="format">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </div>
    </div>
    )
}
