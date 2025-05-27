// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

import './header.css';
import { Sendbtn, Contactbtn } from "../btn/Button.jsx";

const Navbar = () => {
  const caretStyle = { color: "#F2963A" };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const productsRef = useRef();
  // const toggleProductsDropdown = () => setProductsDropdownOpen(prev => !prev);

  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const genreRef = useRef();
  // const toggleGenreDropdown = () => setGenreDropdownOpen(prev => !prev);

  const toggleProductsDropdown = () => {
    if (productsDropdownOpen) {
      if (productsRef.current) {
        productsRef.current.classList.remove("menu-open");
        productsRef.current.classList.add("menu-closing");
      }
      setTimeout(() => {
        setProductsDropdownOpen(false);
        if (productsRef.current) {
          productsRef.current.classList.remove("menu-closing");
        }
      }, 300);
    } else {
      if (genreDropdownOpen) {
        if (genreRef.current) {
          genreRef.current.classList.remove("menu-open");
          genreRef.current.classList.add("menu-closing");
        }
        setTimeout(() => {
          setGenreDropdownOpen(false);
          if (genreRef.current) {
            genreRef.current.classList.remove("menu-closing");
          }
          setProductsDropdownOpen(true);
        }, 300);
      } else {
        setProductsDropdownOpen(true);
      }
    }
  };

  const toggleGenreDropdown = () => {
    if (genreDropdownOpen) {
      if (genreRef.current) {
        genreRef.current.classList.remove("menu-open");
        genreRef.current.classList.add("menu-closing");
      }
      setTimeout(() => {
        setGenreDropdownOpen(false);
        if (genreRef.current) {
          genreRef.current.classList.remove("menu-closing");
        }
      }, 300);
    } else {
      if (productsDropdownOpen) {
        if (productsRef.current) {
          productsRef.current.classList.remove("menu-open");
          productsRef.current.classList.add("menu-closing");
        }
        setTimeout(() => {
          setProductsDropdownOpen(false);
          if (productsRef.current) {
            productsRef.current.classList.remove("menu-closing");
          }
          setGenreDropdownOpen(true);
        }, 300);
      } else {
        setGenreDropdownOpen(true);
      }
    }
  };

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
          <ul className={`nav-list ${menuOpen ? "show-menu" : ""}`}>
            {/* Dropdown: Products */}

            <button className='Xmark' onClick={() => setMenuOpen(false)}><i className="fa-solid fa-xmark"></i></button>

            {/* Products Dropdown */}
            <li className={`drop-down-products-list ${productsDropdownOpen ? 'active' : ''}`}>
              <span onClick={toggleProductsDropdown}>
                Products <i className="fa-solid fa-caret-up caret-icon"></i>
              </span>

              <ul ref={productsRef} className={`list-heading ${productsDropdownOpen ? "menu-open" : ""}`}>
                <span className='back-button' onClick={toggleProductsDropdown}><i className="fa-solid fa-caret-right"></i> Products</span>
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
                      {/* <i className="fa-solid fa-caret-right"></i> */}
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

            {/* genre dropdown */}
            <li className={`drop-down-products-list ${genreDropdownOpen ? 'active' : ''}`}>
              <span onClick={toggleGenreDropdown}>Shop By Genre <i className="fa-solid fa-caret-up caret-icon"></i></span>

              <ul ref={genreRef} className={`list-heading ${genreDropdownOpen ? "menu-open" : ""}`}>
                <span className='back-button' onClick={toggleGenreDropdown}><i className="fa-solid fa-caret-right"></i> Shop By Genre</span>
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
        <Contactbtn className="btn-media-query-style" />
        <span className="material-symbols-outlined" onClick={toggleMenu}>menu</span>
      </nav>
    </header>
  );
};

export default Navbar;
