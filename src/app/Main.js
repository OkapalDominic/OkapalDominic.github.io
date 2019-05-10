import React from 'react';
import { Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Nav from './components/Nav';

export default class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
                <Route exact={true} path="/portfolio/" component={Home} />
                <Route path="/portfolio/about" component={About} />
                <Route path="/portfolio/contact" component={Contact} />
                <Route path="/portfolio/portfolio" component={Portfolio} />
            </div>
        );
    }
}