import React from 'react'
import Navbar from '../Home/Navbar.jsx';
import Footer from '../Home/Footer.jsx';
import { CookieCardList } from './CookieCardList'

export default function Products() {
  return (
      <div style={{ marginTop: "90px"  }}>
      <Navbar />
      <CookieCardList />
      <Footer/>
    </div>
  )
}
