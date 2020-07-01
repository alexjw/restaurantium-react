import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            ---
            <Link to="/ingredients">Ingredients</Link>
            ---
            <Link to="/clients">Clients</Link>
        </div>
    )
};

export default Header;
