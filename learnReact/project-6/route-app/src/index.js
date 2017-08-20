import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import FourPointOne from './FourPointOne';
import NoMatch from './NoMatch';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/One' component={One} />
                <Route exact path='/Two' component={Two} />
                <Route exact path='/Three' component={Three} />
                <Route exact path='/Four' component={Four} />
                <Route exact path='/Four/:id' component={FourPointOne} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
), document.getElementById('root'));

registerServiceWorker();
