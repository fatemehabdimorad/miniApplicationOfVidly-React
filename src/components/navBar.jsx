import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Vidly
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rentals">
                  Rentals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customers">
                  Customers
                </NavLink>
              </li>
              {/* const {user}=this.props; */}
              {/* {!user && (
                <React.Fragmrnt> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              {/* </React.Fragmrnt> */}
              {/* )} */}
              {/* also we need to put the condition for user */}
              {/* {user && (
                <React.Fragmrnt>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
              </React.Fragmrnt>)} */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
