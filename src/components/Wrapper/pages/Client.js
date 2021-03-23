import React from 'react';
import DataClient from "../DataClient/DataClient";
import CoachClient from "../CoachClient/CoachClient";
import Contact from "../Contact/Contact";
import Age from "../Age/Age";

import Button from "../Button/Button";
import {Link} from "react-router-dom"
import Select from "../Select/Select";


export default function Client() {
    return (
        <div>
          <CoachClient/>
          <Contact/>
          <Age/>
          <DataClient/>
        </div>
    )
}
