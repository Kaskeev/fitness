import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Client from '../pages/Client'
import Target from '../pages/Target'
import Indicator from '../pages/Indicator'

export default function Main() {
    return (
        <div>
            <main>
                <Switch>
                <Route exact path='/client' component={Client}/>
                <Route path='/target' component={Target}/>
                <Route path='/indicator' component={Indicator}/>
                </Switch>
            </main>
        </div>
    )
}
