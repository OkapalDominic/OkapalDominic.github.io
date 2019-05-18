import React from 'react';
import { Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Game from './pages/Game';
import FourOhFour from './pages/404';

import Nav from './components/Nav';

export default class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
                <Route exact={true} path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                {/* <Route path="/contact" component={Contact} /> */}
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/examples/game" component={Game} />
                <Route component={FourOhFour} />
            </div>
        );
    }
}