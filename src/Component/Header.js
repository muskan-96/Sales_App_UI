import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Sales App</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact to="/" className="nav-link" activeClassName="active">ADD Sales</NavLink>
              <NavLink to="/topSales" className="nav-link" activeClassName="active">Top 5 SALES</NavLink>
              <NavLink to="/revenue" className="nav-link" activeClassName="active">TODAY'S TOTAL REVENUE</NavLink>
              <NavLink to="/Login" className="nav-link" activeClassName="active">LOGIN</NavLink>
              <NavLink to="/register" className="nav-link" activeClassName="active">REGISTER</NavLink>
              <NavLink to="/logout" className="nav-link" activeClassName="active">LOGOUT</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header




