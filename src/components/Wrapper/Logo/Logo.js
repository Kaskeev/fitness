import React, { Component } from 'react';
import styles from "./Logo.css";
import logoImg from "../images/logo1.svg";


export default function Logo() {
    return (
        <div>
        <div className="logo">
            <img src={logoImg}/>
        </div>
    </div>
    )
}
