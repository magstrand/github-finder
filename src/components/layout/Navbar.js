import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({logo, title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={"fab fa-github"}/> {title}
                </h1>
                <ul>
                    <li>
                        <Link to="/">Hjem</Link>
                    </li>
                    <li>
                        <Link to={"/About"}>Info</Link>
                    </li>
                </ul>
            </nav>
        );

}

export default Navbar;
