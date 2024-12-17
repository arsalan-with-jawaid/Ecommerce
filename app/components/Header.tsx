import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-500">
      <div className="container">
        <div className="logo">
          <h1 className="bg-amber-400">Avion</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li className="bg-orange-200"><a href="#">Plant pots</a></li>
            <li className="bg-orange-200"><a href="#">Ceramics</a></li>
            <li className="bg-orange-200"><a href="#">Tables</a></li>
            <li className="bg-orange-200"><a href="#">Chairs</a></li>
            <li className="bg-orange-200"><a href="#">Crockery</a></li>
            <li className="bg-orange-200"><a href="#">Tableware</a></li>
            <li className="bg-orange-200"><a href="#">Cutlery</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

