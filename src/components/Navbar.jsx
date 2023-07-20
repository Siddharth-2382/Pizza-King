import React from "react";
import Button from "./Button";
import logo from "./Images/logo.png";

function Navbar() {
  function handleClick() {
    const primaryNav = document.querySelector(".primary-navigation-container");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const isNavVisible = primaryNav.getAttribute("data-visible") === "true";

    if (isNavVisible) {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    } else {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    }
  }

  return (
    <header className="navbar">
      <div>
        <img className="navbar-brand" src={logo} alt="Brand Logo" />
      </div>
      <button
        aria-expanded="false"
        className="mobile-nav-toggle"
        onClick={handleClick}
      ></button>
      <div className="primary-navigation-container" data-visible="false">
        <ul className="primary-navigation">
          <li className="nav-link-item">
            <a className="nav-link" href="google.com">
              HOME
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="google.com">
              MENU
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="google.com">
              ORDER
            </a>
          </li>
          <li className="nav-link-item">
            <a className="nav-link" href="google.com">
              ABOUT US
            </a>
          </li>
          <li className="nav-link-item">
            <Button class="btn btn-primary btn-md" name="LOGIN" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
