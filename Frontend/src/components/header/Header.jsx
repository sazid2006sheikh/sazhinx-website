// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import './header.css';
import { Sendbtn, Contactbtn } from "../btn/Button.jsx";

const Navbar = () => {
  const caretStyle = { color: "#F2963A" };

  return (
    <header>
      <nav className="navbar">
        <div className="container-left">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="SAZHINX Logo" />
            </Link>
          </div>

          {/* Navigation List */}
          <ul className="nav-list">
            {/* Dropdown: Products */}
            <li className="drop-down-products-list">
              <span>
                Products <i className="fa-solid fa-caret-up caret-icon"></i>
              </span>

              {/* Dropdown Content */}
              <ul className="list-heading">
                {[
                  {
                    title: "Camera & Video Support Gear",
                    items: ["Tripod", "Monopod", "Selfie Stick cum Tripod", "Gimbal", "Mic Stand"],
                  },
                  {
                    title: "Studio Lighting Equipment",
                    items: ["Ring Light", "Fill Light", "Chroma"],
                  },
                  {
                    title: "Cables & Connectivity",
                    items: ["HDMI Cables", "VGA Cables", "Multi Cable in One"],
                  },
                  {
                    title: "Power & Setup Essentials",
                    items: ["Extension Board", "Multi Purpose Socket", "Cable Management"],
                  },
                  {
                    title: "Studio Decor & Extras",
                    items: ["Motivation Frames", "Fake Plants"],
                  },
                ].map((section, index) => (
                  <li key={index} className="drop-right-products-list hover-effect">
                    <span className="color">
                      {section.title}{" "}
                      <i className="fa-solid fa-caret-right caret-icon" style={caretStyle}></i>
                    </span>
                    <ul className="list-items">
                      {section.items.map((item, i) => (
                        <li key={i}>
                          <Link to={`/category/${item.replace(/\s+/g, '-').toLowerCase()}`} className="color">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>

            {/* Other Links */}
            <li><Link to="/support" href="#">Support</Link></li>
            <li><Link to="/gallery" href="#">Gallery</Link></li>
            <li className='drop-down-products-list'><span>Shop By Genre <i className="fa-solid fa-caret-up caret-icon"></i></span>
              <ul className="list-heading">
                {[
                  "Content Creation Kits",
                  "Home Studio Setup",
                  "Outdoor & Travel Vlogging",
                  "Music & Podcast Production",
                ].map((items, i) => (
                  <li key={i} className="drop-right-products-list hover-effect">
                    <Link to={`/category/${items.replace(/\s+/g, '-').toLowerCase()}`} className="color">{items}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        {/* Register Button */}
        {/* <RegisterBtn /> */} {/*not is use*/}
        <Contactbtn />
      </nav>
    </header>
  );
};

export default Navbar;
