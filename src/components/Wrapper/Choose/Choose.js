import React, { Component } from 'react'
import {BrowserRouter, BrowserRouter as Router, Link, Route} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import styles from "./Choose.css";
import Client from "../pages/Client"
import Target from "../pages/Target"
import Indicators from "../pages/Indicators"


const history = createBrowserHistory();

export default function Choose() {
    return (
        <BrowserRouter history={history}>
        <div className="choose">
            <ul className="chooseLink">
                <li><Link to = "/"><button className="buttonChoose buttonFirst">о клиенте</button></Link></li>
                <li ><Link to ="/target"><button className="buttonChoose buttonSecond">цель</button> </Link></li>
                <li ><Link to ="/indicators"><button className="buttonChoose buttonThird">показатели</button></Link></li>
            </ul>
        
        <Route exact path="/" component={Client}/>
        <Route path="/target" component={Target}/>
        <Route path="/indicators" component={Indicators}/>
        
        </div>
        </BrowserRouter>
    )
}

