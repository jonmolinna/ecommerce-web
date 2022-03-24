import React, { useContext } from 'react';

import { chatAt } from '../util/chatAt';
import { CartContext } from '../context/shoppingCar';

const ProductCar = ({ product }) => {
    const priceTotalProduct = product.precio * product.quantity;
    const { deleteOneProductToCar } = useContext(CartContext);

    console.log('>>>>>', product);

    return (
        <div className='grid grid-cols-12 gap-x-4 shadow-md mb-4'>
            <img
                src={product.imagen}
                alt={product.marca}
                className='col-span-5'
            />
            <article className='col-span-7 relative'>
                <h2 className='text-base font-semibold mb-1'>
                    { product.marca }
                </h2>
                <div className='flex'>
                    <small className='text-sm mr-1'>Color:</small>
                    <small className='text-sm'>
                        { product.color }
                    </small>
                </div>
                <div className='flex'>
                    <small className='text-sm mr-1'>Talla:</small>
                    <small className='text-sm'>
                        { chatAt(product.talla) }
                    </small>
                </div>
                <div className='flex mt-2'>
                    <small className='text-sm mr-1'>Precio:</small>
                    <small className='text-sm'>
                        S/ { product.precio }
                    </small>
                </div>
                <div className='flex flex-row items-center'>
                    <small className='text-sm mr-7'>Cantidad:</small>
                    <div className='flex items-center'>
                        <button
                            className='border-2 border-pink-700 w-6 h-6 rounded-full font-bold text-xl flex items-center justify-center p-2 active:bg-pink-700'
                        >
                            -
                        </button>
                        <small className='mx-3 text-lg font-normal'>
                            { product.quantity }
                        </small>
                        <button 
                            className='border-2 border-pink-700 w-6 h-6 rounded-full font-bold text-xl flex items-center justify-center p-2 active:bg-pink-700'
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className='flex mt-3'>
                    <p className='text-lg font-semibold mr-2'>Total:</p>
                    <p className='text-lg font-semibold'>
                        S/ {priceTotalProduct}
                    </p>
                </div>
                <button 
                    className='text-pink-700 absolute right-0 top-0'
                    onClick={() => deleteOneProductToCar(product)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </article>
        </div>
    )
}

export default ProductCar