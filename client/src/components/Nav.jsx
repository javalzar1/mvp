import React from 'react';
import styles from '../../styles/Nav.module.css'

const Nav = () => (
<div className={styles.nav}>
  <a>
    <p>logo</p>
  </a>
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