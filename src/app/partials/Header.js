import React, { Component, Fragment } from "react";
import "./partials.css";
import { Search } from "./Search";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ""
        }

    }

    
    render() {
        return (
            <Fragment>
                <nav className="navbar justify-content-between">
                    <div className="container">
                        <Link to="/" className="navbar-brand">TV Shows</Link>
                        <Search />
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export { Header };