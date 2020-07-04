import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
// import Mosaic from './Components/Mosaic.js'
import Friends_Vids from './Components/Friends_Vids'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
                <Route path={`${process.env.PUBLIC_URL}/:name`} component={Friends_Vids} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
