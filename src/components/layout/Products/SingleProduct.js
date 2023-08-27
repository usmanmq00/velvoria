import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../../context/cartContext'

const SingleProduct = ({ product }) => {

  const { addToCart } = useContext(cartContext)

  const [isClicked, setIsClicked] = useState(false);
  const [size, setSize] = useState(product.size)

  const handleSizeChange = (index) => {
    setIsClicked(index);
    setSize(size[index]);
  };

  const handleAddToCart = () => {
    const selectedSize = size
    addToCart(product, selectedSize)
  }

  return (
    <>
    <section className='w-96 h-60 mb-28 text-start cursor-pointer m-5'>
        <div className='relative singleproduct'>
        <Link to={`/products/${product._id}`}><img  className='realtive' src={product.image.img1} alt={product.name} /></Link>
            <div className='bottom-0 absolute w-full my-2 h-24 single-product'>
              <p className='pt-4 text-center text-black'>SIZE: {product.size.map((s, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeChange(index)}
                  className={`inline ml-5 cursor-pointer w-5 outline-none ${
                    isClicked === index ? 'border-b-2 border-black text-black' : 'text-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}</p>
              <Link to='/cart'><button className='text-white bg-black py-2 absolute w-full bottom-0 opacity-100' onClick={handleAddToCart} >ADD TO CART +</button></Link>
            </div>
        </div>
        <Link to={`/products/${product._id}`}><div>
          <div>{product.name}</div>
          <div>PKR {product.price}</div>
        </div></Link>
    </section>
    </>
  )
}

export default SingleProduct
