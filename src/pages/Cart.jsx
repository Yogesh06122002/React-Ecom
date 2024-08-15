import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, deleteProduct, increaseCount } from '../Slice/cart';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    // Calculate total price
    const total = cart.reduce((acc, item) => acc + item.product?.price * item.count, 0);

    const handleDecrease = (productId) => {
        dispatch(decreaseCount({ productId, amount: 1 }));
    };

    const handleIncrease = (productId) => {
        dispatch(increaseCount({ productId, amount: 1 }));
    };

    console.log(cart)
    return (
        <div className='flex justify-center'>
            <div className='w-[60%] h-[80vh] overflow-y-auto px-20 pt-10'>
                {cart.map((item, index) => (
                    <div key={index} className="flex gap-x-20 p-1 border-blue-100 border-2 items-center">
                        <div className='h-32 w-32 flex justify-center items-center'>
                            <img src={item.product?.picture} alt={item.product?.name} className='h-full w-full' />
                        </div>
                                
                        <div>
                            <p className='text-xl'>{item.product?.name}</p>
                            <p className='text-sm text-gray-500'>{item.product?.type}</p>
                            <p className='text-sm text-gray-500'>₹{item.product?.price}</p>
                            <button 
                                onClick={() => dispatch(deleteProduct(item.product.id))} 
                                className='border-blue-200 bg-[#0075BE] text-white p-1 mt-3 rounded-md'
                            >
                                REMOVE
                            </button>
                        </div>
                            
                        <div>
                            <p className='text-xl'>Qty</p>
                            <div className="flex gap-3 justify-center items-center">
                                <button 
                                    className='text-gray-500 text-3xl' 
                                    onClick={() => handleDecrease(item.product.id)} 
                                    disabled={item.count <= 1} // Disable "-" button if count is 1
                                >
                                    -
                                </button>
                                <p>{item.count}</p>
                                <button 
                                    className='text-gray-500 text-2xl' 
                                    onClick={() => handleIncrease(item.product.id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[25%] h-[300px] border-2 border-blue-200 p-5 rounded-sm'>
                <h1 className="text-gray-500 font-semibold text-xl">PRICE DETAILS</h1>
                <div className="flex justify-between w-[100%] mt-10">
                    <p>Price ({cart.length} items)</p>
                    <p>₹{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between w-[100%] mt-10">
                    <p className='font-semibold'>TOTAL AMOUNT</p>
                    <p>₹{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
