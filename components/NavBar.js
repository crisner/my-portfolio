import React from "react";
import styles  from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>About</li>
        <li>Work Experience</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
