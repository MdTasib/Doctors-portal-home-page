import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link mr-4" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4 text-white" to="/dashboard">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4 text-white" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-4 text-white" to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;