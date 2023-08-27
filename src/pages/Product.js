  import React, { useState, useContext } from 'react'
  import Items from '../components/Items'
  import products from '../products'
  import { Link, useParams } from 'react-router-dom'
  import { cartContext } from '../context/cartContext'

  const Product = () => {

    const { id: productId } = useParams()
    const product = products.find(p => p._id === productId)

    const { addToCart } = useContext(cartContext)

    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const [size, setSize] = useState(product.size);

      const handleSizeChange = (index) => {
        setIsClicked(index);
        setSize(size[index]);
      };

    const handleQuantityChange = (value) => {
      const newQuantity = quantity + value;
      if (newQuantity >= 1 && newQuantity <= product.countInStock) {
        setQuantity(newQuantity);
      }
    }; 

    const handleAddToCart = () => {
      const selectedSize = size
      const selectedQuantity = quantity;
      addToCart(product, selectedSize, selectedQuantity)
    }

    return (
      <>
        <section className='w-full p-10 md:flex md:product-item'>
          <div className='md:w-[60vw] mr-10 w-full mb-5 md:h-[75vh] scroll-content h-60'>
              <div className='flex overflow-hidden'>
                <div className='md:flex md:w-[50%]'>
                  <img className='md:border-2 border-gray-100' src={product.image.img1} alt={product.name} />
                  <img className='md:border-2  border-gray-100' src={product.image.img2} alt={product.name} />
                </div>
              </div>
              <div className='overflow-hidden md:border-2 border-gray-100 w-[100%]'>
                <img src={product.image.img3} alt={product.name} />
              </div>
              <div className='flex overflow-hidden'>
                <div className='md:flex md:w-[50%]'>
                  <img className='border-2 border-gray-100' src={product.image.img4} alt={product.name} />
                  <img className='border-2 border-gray-100' src={product.image.img5} alt={product.name} />
                </div>
              </div>
          </div>

          <div className=' mr-5 w-[70vh] scroll-content h-[75vh]'>
            <h1 className='text-4xl mb-4'>{ product.name }</h1>
            <p className='text-2xl mb-6'>PKR { product.price }</p>
            <p className='text-green-500 text-lg'>{ product.countInStock > 0 ? 'In Stock': 'Out Of Stock' }</p>
            <p className='text-gray-400 font-medium text-xl'>{ product.model }</p>
            <div className='flex mb-2'>
              <p className='text-gray- cursor-pointer'>Shipping</p>
              <p className='text-gray-400 text-mf pl-2'>calculated at checkout</p>
            </div>
            <div className='mb-10'>
              <p className='text-lg inline'>SELECT SIZE:</p>
              {product.size.map((s, index) => (
                <button
                  key={index}
                  onClick={() => handleSizeChange(index)}
                  className={`inline ml-5 cursor-pointer w-5 outline-none ${
                    isClicked === index ? 'border-b-2 border-black text-black' : 'text-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            
            <div className='mb-10 flex'>
              <p className='pr-10'>QUANTITY</p>
              <div className='border-2 py-1 px-5 border-gray-400 flex'>
                <button className='pr-8 text-xl' onClick={() => handleQuantityChange(-1)}>-</button>
                <input
                  type='text'
                  className='outline-none pr-6 text-xl border-none w-12'
                  value={quantity}
                  readOnly
                />
                <button className='text-xl' onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
            
            <Link to={`/cart`}><button className='text-white bg-black py-5 md:w-full w-[85vw]' onClick={handleAddToCart} >ADD TO CART +</button></Link>
            <Link to='/checkouts/information'><button className='text-black hover:text-white bg-white hover:bg-black border-2 border-black mt-3 py-5 md:w-full w-[85vw]'>BUY IT NOW</button></Link>
          </div>
        </section>
        <Items title='YOU MAY ALSO LIKE' />
      </>
    )
  }

  export default Product 