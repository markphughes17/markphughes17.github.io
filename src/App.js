import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </div>
            </HashRouter>
        )
    }
}

export default App;