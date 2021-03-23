import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import Title from '../Title/Title'
import Input from '../Input/Input'
import Button from '../Button/Button'
import styles from './Target.css'

export default function Target() {
    return (
        <div className="target">
            <Title title="Уровень активности: "/>
            <div className="genderChoice">
                <Checkbox titleName="Низкий (не занимаюсь)"/>
                <Checkbox titleName="Средний (1-2 раза в неделю)"/>
                <Checkbox titleName="Высокий (более 3-х раз в неделю)"/>
            </div>
            <Title title="цель на 3 месяца"/>
            <Input name="Опишите цель"/>
            <Title title="на 6 месяцев"/>
            <Input name="Опишите цель"/>
            <Title title="на 12 месяцев"/>
            <Input name="Опишите цель"/>
            <Title title="Рекомендуемые для посещения групповые программы"/>
            <Input name="Опишите программы"/>
            <Button/>
        </div>
    )
}
