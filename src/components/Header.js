import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
        <Link className="links" to="/">Recipes</Link>
        <Link className="links" to="/about">About me</Link>
    </div>
  );
}

export default Header;