import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import home from './home';
import inside from './components/inside/inside';



const routes = () =>{
    return( 
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/inside" component={inside} />
            </Switch>
        </div>
    </Router>
    );
}

export default routes;