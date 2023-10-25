import React from 'react'
import classes from './footer.module.css'
const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About</h2>
          <p>
         A Blog Application to view and edit blogs from various walks of life
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7007650021</span>
          <span>Email: ankits.dev1@gmail.com</span>
          <span>GitHub: Ankit921</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Lucknow</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer