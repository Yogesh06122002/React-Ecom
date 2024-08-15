import React, { useState ,useEffect} from 'react'
import { MyProducts } from '../contents/ProductInfo'
import { Link } from 'react-router-dom'
import { addProduct } from '../Slice/cart'
import { useDispatch ,useSelector} from 'react-redux'
import { setActiveCategory } from '../Slice/productType'



function Products() {

 const activeCategory = useSelector((state)=>state.product)
  const filterProducts = MyProducts.filter(product => activeCategory === "all" || product.type.toLowerCase() === activeCategory)
  const dispatch = useDispatch()


 




  return (


    <div className='mx-28'>
      <h1 className='text-4xl text-center font-semibold'>New Arrivals</h1>
      <div className='w-16 mt-6 mx-auto  h-[3px] bg-black'>
      </div>
      <div id='mens' className="flex mx-auto w-auto mt-8 justify-center gap-2">
        <p onClick={() => dispatch(setActiveCategory("all"))} className={`${activeCategory=== "all" ? "bg-[#0075BE] text-white " : ""} hover:bg-[#0075BE] cursor-pointer p-2 hover:text-white  text-center`}>ALL</p>
        <p onClick={() => dispatch(setActiveCategory("mens"))} className={`${activeCategory === "mens" ? "bg-[#0075BE] text-white" : ""}  cursor-pointer hover:bg-[#0075BE] p-2 hover:text-white   text-center`}>MENS</p>
        <p onClick={() => dispatch(setActiveCategory("womens"))} className={`${activeCategory === "womens" ? "bg-[#0075BE] text-white" : ""} hover:bg-[#0075BE]  cursor-pointer p-2 hover:text-white  text-center`}>WOMENS</p>
        <p onClick={() => dispatch(setActiveCategory("accessories"))} className={`${activeCategory === "accessories" ? "bg-[#0075BE] text-white" : ""} hover:bg-[#0075BE] p-2  cursor-pointer hover:text-white text-center`}>ACCESSORIES</p>
      </div>

      <div className='  mt-14 mb-20 h-auto grid grid-cols-4 gap-20 gap-y-16 '>
        {filterProducts.map((i) =>
          <div className='flex flex-col items-center' >
            <Link to={`/${i.id}`} className='card w-56 h-74  mx-auto border border-gray-200 shadow-md    items-center justify-between rounded-sm'>
              <div className='w-full flex items-center justify-center h-48'>
                <img src={i.picture} alt="" className='w-auto h-full' />
              </div>
              <div className='text-center text-lg font-semibold mt-2 '>
                <h2>{i.name}</h2>
                <h3 className='text-gray-500 text-base'>{i.type}</h3>
                <p className='text-[#0075BE] text-base'>₹ {i.price}</p>
                <div>
                </div>
              </div>
            </Link>
            <button onClick={() => dispatch(addProduct({ product: i, count: 1 }))} className='bg-[#0075BE] p-2  font-normal text-sm text-white w-56 '>
              ADD TO CART
            </button>
          </div>



        )
        }
      </div>
    </div>
  )
}


export default Products