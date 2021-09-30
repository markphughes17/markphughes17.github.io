import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                </div>
            </HashRouter>
        )
    }
}

export default App;