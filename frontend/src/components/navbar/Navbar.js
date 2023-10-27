import React, { useEffect, useState } from 'react'
import classes from './navbar.module.css'
import {Link,useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";


const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
 
   const dispatch = useDispatch();
   const navigate = useNavigate();



  const handleLogout=()=>{
   
     dispatch(logoutUser());
     navigate("/login");
  }

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
          <li className={classes.listItem}>
            <div>
              {user ? (
                <div>
                  <Link
                    style={{ color: "white", fontSize: "bold" }}
                    to="/create"
                  >
                    Create
                  </Link>
                  <button
                    style={{ color: "white", fontSize: "bold",marginLeft:"10px",padding:"10px 5px 10px 5px",borderRadius:"5px",backgroundColor:"red" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  style={{ color: "white", fontSize: "bold" }}
                  to="/register"
                >
                  Register
                </Link>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar