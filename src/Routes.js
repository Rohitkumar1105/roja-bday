import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Friends_Normal from './Components/Friends_normal'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
                <Route exact path={`${process.env.PUBLIC_URL}/:name`} component={Friends_Normal} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
