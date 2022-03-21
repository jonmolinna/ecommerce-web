import React from 'react';
import ProductCar from '../components/ProductCar';
import Layout from '../layouts/Layout';

const Carrito = () => {
    return (
        <Layout>
            <h1 className='text-2xl font-bold'>Carrito</h1>
            <article className='grid grid-cols-12 gap-x-4 gap-y-5'>
                <aside className='col-span-12 md:col-span-7'>
                    <ProductCar />
                    <ProductCar />
                    <ProductCar />
                </aside>
                <aside className='col-span-12 md:col-span-5'>
                    <div className='shadow-md p-3'>
                        <h2 className='text-xl font-bold mb-2'>Resumen</h2>
                        <article>
                            <div className='flex justify-between'>
                                <p className='font-normal'>Subtotal (2 productos)</p>
                                <p className='font-normal'>S/ 119.80</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='font-normal'>Descuento</p>
                                <p className='font-normal'>S/ 0</p>
                            </div>
                            <div className='flex justify-between my-3'>
                                <p className='font-bold text-lg'>Total</p>
                                <p className='font-bold text-lg'>S/ 119.80</p>
                            </div>
                        </article>
                        <button
                            className='p-2 bg-pink-700 active:bg-pink-900 text-white rounded-md w-full'
                        >
                            Continuar
                        </button>
                    </div>
                </aside>
            </article>
        </Layout>
    )
}

export default Carrito;