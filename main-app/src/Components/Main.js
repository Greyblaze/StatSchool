import React from 'react';
import './Navbar.css';

export const Navbar = () => {
    return (
        <>
         <nav>
            <div className='logo'>
                <h3>SchoolStat</h3>
            </div>
            <div className='navbar'>
                <p>Home</p>
                <button>LOG IN</button>
            </div>
        </nav>
        </>
    )
}

export const Section = () => {
    return (
        <>
         <section>
            <h1>SchoolStat</h1>
            <h4>Welcome to the citadel of learning.</h4>
            <button className="dashboard"><a href="../Dashboard">DASHBOARD</a></button>
        </section>
        </>
    )
}

export const Footer = () => {
    return (
        <>
         <footer>
            <div className="foot-container">
                <div className="home">
                        <h2>SchoolStat</h2>
                </div>
                <div className="links">
                        <h3>Quick Links</h3>
                        <p><a href="./homepage.js">Home</a></p>
                        <p><a href="#">Register</a></p>
                        <p><a href="dashboard.html">Dashboard</a></p>
                </div>
                <div className="contact">
                        <h3>Contact</h3>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">Instagram</a></p>
                        <p><a href="#">LinkedIn</a></p>
                        <p><a href="#">Gmail</a></p>
                </div>
            </div>
         </footer>         
        </>
    )
}









