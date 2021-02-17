import React from 'react';
import styles from '../../styles/Nav.module.css'

const Nav = () => (
<div className={styles.nav}>
  <img src="./assets/trip_logo.jpg" />
  <ul className={styles.flex_container}>
    <li>
      <a>About</a>
    </li>
    <li>
      <a>My Trips</a>
    </li>
    <li>
      <a>Login/Sign Up</a>
    </li>
  </ul>
</div>

);

export default Nav;