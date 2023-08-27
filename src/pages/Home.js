import React from 'react'
import Banner from '../components/layout/Home/Banner'
import QualityListing from '../components/layout/Home/QualityListing'
import About from '../components/layout/Home/About'
import Category from '../components/layout/Home/Category'
import Items from '../components/Items'

const Home = () => {
  return (
    <>
      <Banner />
      <Category />  
      <Items title='NEW ARRIVAL' /> 
      <QualityListing />
      <Items title='BEST SELLERS' />
      <About />
    </>
  )
}

export default Home 