import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  getAuth,
  signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export function NavBar() {
  const auth = getAuth();
  const navigate = useNavigate();
  const logout = async () => {
      await signOut(auth);
      navigate('/');
  };


  return (
    <header className="navigation">
        <p className="nav-brand-name"><Link to="/" className="text-white">BARK!</Link></p>
        <nav className="navbar navigation-links">
            <ul className="nav navbar-fixed-top">
                <li className="nav-item" role="presentation"><NavLink to="/dailyPlan" className="nav-link text-white">Plans</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/esa" className="nav-link text-white">ESA</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/pets" className="nav-link text-white">Pets</NavLink></li>
                <li className="nav-item" role="presentation"><NavLink to="/about" className="nav-link text-white">About</NavLink></li>
                <li className="nav-item" role="presentation"><div className="nav-link text-white fa fa-sign-out" onClick={logout}></div></li>
            </ul>
        </nav>
    </header>
  );
}

/*<li className="nav-item" role="presentation"><NavLink to="/" className="nav-link text-white fa fa-sign-out" onClick={logout}></NavLink></li>*/