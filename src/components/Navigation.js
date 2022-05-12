import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  getAuth,
  signOut,
} from "firebase/auth";

export function NavBar() {
  const auth = getAuth();
  const logout = async () => {
      await signOut(auth);
  };


  return (
    <header className="navigation">
        <p className="nav-brand-name"><Link to="/" className="text-white">BARK!</Link></p>
        <nav className="navbar navigation-links">
            <ul className="nav navbar-fixed-top">
                <li className="nav-item" role="presentation"><NavLink to="/about" className="nav-link text-white">About</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/pets" className="nav-link text-white">Pets</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/dailyPlan" className="nav-link text-white">Plans</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/esa" className="nav-link text-white">ESA</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/" className="nav-link text-white" onClick={logout}>Logout</NavLink></li>
            </ul>
        </nav>
    </header>
  );
}