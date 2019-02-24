import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import home from './home';



const routes = () =>{
    return( 
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={home} />
            <Route path="/hola" component={hola} />
            </Switch>
        </div>
    </Router>
    );
}

export default routes;