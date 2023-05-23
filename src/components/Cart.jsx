import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
    const { currentColor, isClicked, handleClick } = useStateContext();

    return (
        <div className="fixed top-0 right-0 w-full bg-half-transparent nav-item">
        <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
            <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Shopping Cart</p>
                <button 
                    type='button' 
                    onClick={()=> handleClick('cart')}
                    className='p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray'
                    style={{color: 'rgb(153, 171, 180)', borderRadius: '50%'}}
                >
                    <MdOutlineCancel/>
                </button>
            </div>
            {cartData?.map((item, index) => (
            <div key={index}>
                <div>
                <div className="flex items-center gap-5 p-4 leading-8 border-b-1 border-color dark:border-gray-600">
                    <img className="w-24 rounded-lg h-80" src={item.image} alt="" />
                    <div>
                    <p className="font-semibold ">{item.name}</p>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{item.category}</p>
                    <div className="flex items-center gap-4 mt-2">
                        <p className="text-lg font-semibold">{item.price}</p>
                        <div className="flex items-center border-r-0 rounded border-1 border-color">
                        <p className="p-2 text-red-600 border-r-1 dark:border-gray-600 border-color "><AiOutlineMinus /></p>
                        <p className="p-2 text-green-600 border-r-1 border-color dark:border-gray-600">0</p>
                        <p className="p-2 text-green-600 border-r-1 border-color dark:border-gray-600"><AiOutlinePlus /></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ))}
            <div className="mt-3 mb-3">
            <div className="flex items-center justify-between">
                <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
                <p className="font-semibold">$890</p>
            </div>
            <div className="flex items-center justify-between mt-3">
                <p className="text-gray-500 dark:text-gray-200">Total</p>
                <p className="font-semibold">$890</p>
            </div>
            </div>
            <div className="mt-5">
            <Button
                color="white"
                bgColor={currentColor}
                text="Place Order"
                borderRadius="10px"
                width="full"
            />
            </div>
        </div>
        </div>
    );
};

export default Cart;