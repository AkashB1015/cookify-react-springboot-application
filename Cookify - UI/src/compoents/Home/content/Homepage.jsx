import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Cards from './Cards'
import CookifySection from './CookifySection'
import FAQSection from './FAQSection'


export default function Homepage() {
  return (
    <div>
      <Navbar/>
    
      <CookifySection/>
        <Cards/>
        <FAQSection/>
       
      <Footer/>
    </div>
  )
}
