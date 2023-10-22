import React from 'react'
import classes from './home.module.css'
import Navbar from '../../components/navbar/Navbar.js'
import FeaturedBlogs from '../../components/featuredBlog/FeaturedBlogs.js'
import Categories from    '../../components/categories/Categories'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer.js'




const Home = () => {
  return (
    <div className={classes.home}>
    <Navbar/>
<FeaturedBlogs/>
<Categories/>
<Newsletter/>
<Footer/>
    </div>
  )
}

export default Home