import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import { Link } from 'react-router-dom';
import About from './components/About';
import Logo from './components/img/kagos-removebg-preview.png'
import './App.css'
import Courses from './components/Courses';
import Contact from './components/Contact';

export default function App() {
  const [menuIcon, setMenuIcon] = useState(false)

  function menuIconClick() {
    setMenuIcon()
  }
  return (
    <div className='Container'>
      <BrowserRouter>
        <header class="header" data-header>
          <div class="container">
            <a href="#" class="logo">
              <img src={Logo} width="162" height="50" alt="EduWeb logo" />
            </a>
            <nav class="navbar" data-navbar>
              <div class="wrapper">
                <a href="#" class="logo">
                  <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo" />
                </a>

                <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                  <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                </button>
              </div>
              <ul>
                {/*  */}
                <ul class="navbar-list">

                  <li class="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                  </li>

                  <li class="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                  </li>

                  <li class="navbar-item">
                    <Link to="/courses" className="navbar-link">Courses</Link>
                  </li>

                  <li class="navbar-item">
                    <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
                  </li>

                  <li class="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                  </li>

                </ul>
              </ul>
            </nav>
            {/*  */}
            <div class="header-actions">

              <button class="header-action-btn" aria-label="toggle search" title="Search">
                <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
              </button>

              <button class="header-action-btn" aria-label="cart" title="Cart">
                <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

                <span class="btn-badge">0</span>
              </button>

              <a href="#" class="btn has-before">
                <span class="span">Try for free</span>

                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>

              <button class="header-action-btn" aria-label="open menu" data-nav-toggler>
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              </button>

            </div>
            <div class="overlay" data-nav-toggler data-overlay></div>
          </div>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}