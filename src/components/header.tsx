import React from "react";
import {Link} from "react-router-dom";
import '../stylesheets/header.sass'

const Header = () => {

    return (
        <div className='header'>
            <Link to="/">Home</Link>
            ---
            <Link to="/ingredients">Ingredients</Link>
            ---
            <Link to="/clients">Clients</Link>
            ---
            <Link to="/meals">Meals</Link>
            ---
            <Link to="/orders">Orders</Link>
        </div>
    )
};

export default Header;
