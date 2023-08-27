import { cartContext, } from "../context/cartContext"
import { useContext } from "react"
import Items from '../components/Items'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cartItems } = useContext(cartContext);

return (
  <>
    <section className="overflow-hidden">
      {
        cartItems && cartItems.length === 0 ? (
          <section className="text-center h-[370px] pt-16">
            <p className="font-normal text-xl pb-8">Your cart is empty</p>
            <Link to='/products'><button className="bg-black text-white py-3 px-7  ">Continue shopping</button></Link>
            <h1 className="text-5xl font-normal pt-16">Have an account?</h1>
            <p className="pt-8 font-normal"><Link to='/account/login'><u className="font-normal">Login</u></Link> to check out faster</p>
          </section>
        ) : (
          <section className="w-full">
            <div className="flex justify-between mx-14 pt-20 pb-5">
              <h1 className="text-5xl">Your Cart</h1>
              <Link to='/products'><p className="text-gray-600 text-lg mt-5">Continue shopping</p></Link>
            </div>
            <table className="w-[100%] mx-14">
              <tr className="w-[100%]">
                <th className="w-[50%] text-start py-10 text-base">PRODUCT</th>
                <th className="w-[30%] text-start text-base">QUANTITY</th>
                <th className="w-[10%] text-start text-base">TOTAL</th>
              </tr>

              {cartItems.map((item, index) => (
                <tr className="w-[100%] border-b-2">
                  <td className='flex mt-10' key={index}>
                    <div className="h-40 w-40">
                      <img src={item.product.image.img1} alt={item.product.name} />
                    </div>
                    <div>
                      <p className="hover:border-b-2 border-black">{item.product.name}</p>
                      <div className="flex">PKR <p className="text-gray-600 ml-2">{item.product.price}</p></div>
                      <div className="pt-3 flex">Size: <p className="text-gray-500 ml-2">{item.size}</p></div>
                    </div>
                  </td>
                  <td>
                    <div className='mb-10 flex'>
                      <div className='border-2 py-1 px-5 border-gray-400 flex'>
                        <button className='pr-8 text-xl'>-</button>
                        <input
                          type='text'
                          value={item.quantity}
                          className='outline-none pr-6 text-xl border-none w-12'
                          readOnly
                        />
                        <button className='text-xl'>+</button>
                       </div>
                     </div>
                  </td>
                  <td className="pb-10">
                    <div className="flex">PKR <p className="text-gray-600 ml-2">{item.quantity*item.product.price}</p></div>
                  </td>
                </tr>
              ))}
            </table>
            <section className="h-96 flex justify-end mx-16">
                <div className="w-80 h-48 mt-20">
                  <div className="flex justify-between">
                    <h1 className="text-xl">SUBTOTAL</h1>
                    <p>PKR <span className="mr-3">{}</span></p>
                  </div>
                  <p className="text-gray-400 mt-8 text-lg font-normal">Taxes and <span className="cursor-pointer text-blue-900">shipping</span> calculated at checkout</p>
                  <Link to='/checkouts/information'><button className="bg-black text-white w-full mt-3 py-4 text-xl">CHECKOUT</button></Link>
                </div>              
            </section>
          </section>
        )}
    </section>

    <Items title='Featured Collection ' />
  </>
);

}

export default Cart