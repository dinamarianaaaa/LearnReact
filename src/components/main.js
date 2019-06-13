import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Task from './task';
import Resume from './resume';
const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/aboutme" component={AboutMe} />
        <Route exact path ="/contact" component={Contact} />
        <Route exact path ="/task" component={Task} />
        <Route exact path ="/resume" component={Resume} />
    </Switch>
)

export default Main;