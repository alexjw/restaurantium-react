import React from "react";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/ingredients">Ingredients</Link>
        </div>
    )
};

export default Header;
