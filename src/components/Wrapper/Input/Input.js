import React from 'react'
import styles from "../Input/Input.css"



export default function Input(props) {
        return (
          <form>
            <label>
              <input className="inputClass"  min="0" placeholder={props.name} {...props}/>
            </label>
          </form>
        );
        }