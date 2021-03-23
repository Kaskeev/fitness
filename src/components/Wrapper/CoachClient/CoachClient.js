import React, { Component } from 'react'
import styles from "./CoachClient.css";
import Input from "../Input/Input"
import Title from "../Title/Title"


export default function CoachClient() {
    return (
        <div className="coachClient">
            <label className="coach">
                <Title title="Тренер"/>
                 <Input name="Имя тренера"/ >
            </label>
            <label className="client">
                <Title title="Клиента"/>
                <Input name="Введите ФИО"/>
            </label>
        </div>
    )
}
