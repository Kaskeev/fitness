import React, { Component } from 'react'
import styles from "../Checkbox/Checkbox.css"
import Title from "../Title/Title"
  


export default function Checkbox(props) {
    return (
        <div > 
            <label className="containerLabel">
                <input type="radio" name="radio"/>
                    <span className="checkmark"></span>
                <p>{props.titleName}</p>
            </label>
 </div>
    )
}
