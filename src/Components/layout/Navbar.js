import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="bi bi-github"></i> Github Finder
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
