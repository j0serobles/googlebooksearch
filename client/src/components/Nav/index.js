import React, { Component } from "react";
import { a } from "react-router-dom";

class Nav extends Component { 
    render() { 
        return (

        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">Google Book Search</a>
            <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/">Search</a>
                </li>
                <li>
                    <a href="/bookshelf">Bookshelf</a>
                </li>
            </ul>
            <ul id="nav-mobile" className="sidenav">
                <li>
                  <a href="/">Search</a>
                </li>
                <li>
                  <a href="/bookshelf">Bookshelf</a>
                </li>
            </ul>

            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
        );
    }
}

export default Nav;