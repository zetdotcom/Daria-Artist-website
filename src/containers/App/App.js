import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Navigation from '../../components/Navigation/Navigation';
import Exhibitions from '../Exhibitions/Exhibitions';
import Work from '../Work/Work';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
            <nav>
                <Navigation />
            </nav>
            <div className="content">
                <div className="contentDiv">
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/exhibitions" component={Exhibitions}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    
                </div>
            </div>
        </div>
    </Router>
    );
  }
}

export default App;
