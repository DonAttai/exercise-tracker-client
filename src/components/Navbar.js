import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
        <div className="col-lg-3"></div>
      </div>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapse-target"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapse-target">
        <Link to="/" className="nav-link">
          Exercise Tracker
        </Link>
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/">
            Exercises
          </Link>
          <Link className="nav-link" to="/create">
            Create Exercise
          </Link>
          <Link className="nav-link" to="/user">
            Create User
          </Link>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
