import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Slice/cart';
import { MyProducts } from '../contents/ProductInfo';

const Productsid = () => {
  const { productid } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    // Find the product based on the ID from params
    setProduct(MyProducts.find(pro => pro.id === productid));
  }, [productid]);

  const handleAddToCart = () => {
    // Dispatch the action with product and count
    dispatch(addProduct({ product, count }));
  };

  return (
    <div className='w-full flex justify-evenly'>
      <div className="w-[40%] flex items-center justify-center">
        <img src={product.picture} alt="" className='h-[300px] w-auto' />
      </div>
      <div className="w-[40%] text-3xl p-10 border-2 border-blue-100 h-full">
        <h1 className='font-medium text-center'>{product.name}</h1>
        <div className='text-2xl mt-7 space-y-5'>
          <p className='text-gray-700 mx-6'>{product.type}</p>
          <p className='mx-6'>₹ {product.price}</p>
          <p className='text-xl'>Qty</p>
          <div className='gap-x-5 flex'>
            <button onClick={() => setCount(count > 1 ? count - 1 : 1)} className='border-2 p-1 h-8 w-8 items-center flex justify-center bg-blue-400 rounded'>-</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className='border-2 p-1 h-8 w-8 bg-blue-400 rounded items-center flex justify-center'>+</button>
          </div>
          <div className="flex gap-x-5 mt-40 py-4">
            <button onClick={handleAddToCart} className='bg-[#0075BE] text-white font-normal text-[15px] p-1 rounded-md'>ADD TO CART</button>
            <button className='bg-[#0075BE] text-white font-normal text-[15px] p-1 rounded-md'>BUY NOW</button>
          </div>
          <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis vitae iure nostrum quos hic similique enim, dicta, dolore culpa, minima ullam dolorum nemo eius magnam? Rerum deleniti illum accusamus et?</p>
        </div>
      </div>
    </div>
  );
};

export default Productsid;
