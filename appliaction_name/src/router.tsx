// node libraries
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// components
import Root from './containers/root';
import Form from './containers/root/person/formperson';
import Table from './containers/root/person/Table';


/**
 * Router Container
 */
function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Root}/>
            <Route path="/form" exact component={Form}/>
            <Route path="/table" exact component={Table}/>
        </BrowserRouter>
    );
}

export default Router;
