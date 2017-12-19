import * as React from "react";
import {NavLink} from "react-router-dom";

import "./Navigation.css";

class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        }


    }



    render() {
        

        return (
            <ul className="navigation">
                <li className="navigation__item" >
                    <NavLink exact={true} to="/">
                    Home</NavLink>
                </li>
                <li className="navigation__item" >
                <NavLink activeClassName="active" to="/work">
                    Work</NavLink>
                </li>
                <li className="navigation__item" >
                    <NavLink activeClassName="active" to="/about">
                    About</NavLink>
                </li>
                <li className="navigation__item" >
                    <NavLink activeClassName="active" to="/exhibitions">
                    Exhibitions</NavLink>
                </li>
                <li className="navigation__item" >
                    <NavLink activeClassName="active" to="/contact">
                    Contact</NavLink>
                </li>
            </ul>
        );
    }
};

export default Navigation;
