import React from "react";
import "./partials.css";
import { getCurrentYear } from "../../shared/utils";

const Footer = () => {
    return (
        <footer>
            <i className="material-icons">copyright</i> <span className="footer-sign-name"> Maja Milanovic {getCurrentYear()}</span>
        </footer>
    )
}

export { Footer };