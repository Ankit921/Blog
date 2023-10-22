import React, { useState } from 'react'
import classes from './navbar.module.css'
import {Link} from 'react-router-dom'
import ankit from "../../assets/ankit.jpg";


const Navbar = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to="/">Blog Post</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          <img onClick={()=>setShowModal(prev=>!prev)} src={ankit} className={classes.img} alt=''/>
          {showModal && 
          <div className={classes.modal}>
            <Link to='/create'>Create</Link>
            <Link to='/register'>Register</Link>
            
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar