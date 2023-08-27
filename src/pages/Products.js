import React from 'react'
import Nav from '../components/layout/Products/Nav'
import Showcase from '../assets/Products/Artboard_14_copy_4-100.webp'
import products from '../products'
import SingleProduct from '../components/layout/Products/SingleProduct'

const Products = () => {
  return (
    <>
      <Nav />
      <img className='w-full' src={Showcase} alt="Showcase" />
      <section className='w-full py-32 flex flex-wrap justify-center products px-20' >
        {
          products.map(product => {
            return <SingleProduct key ={product._id} product={product} />
          })
        }
      </section> 
    </>
  )
}

export default Products 