import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='w-full bg-inherit'>
            <div className='border border-gray-400 rounded-md p-2'>
                <article>
                    <h2 className='p-2 border-b border-gray-400 text-lg font-semibold'>
                        Genero
                    </h2>
                    <div className='flex flex-col'>
                        <button className='bg-pink-700 text-white mt-1 p-1 rounded-lg'>
                            Mujer
                        </button>
                        <button className='bg-pink-700 text-white mt-1 p-1 rounded-lg'>
                            Hombre
                        </button>
                    </div>
                </article>
                {/* <article className='mt-1'>
                    <h2 className='p-2 border-b border-gray-400 text-lg font-semibold'>
                        Categoría
                    </h2>
                    <div className='flex flex-col'>
                        <div>
                            <input type="checkbox" className='bg-pink-700' />
                            <label htmlFor="" className='ml-2'>Polos</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="" className='ml-2'>Camisas</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="" className='ml-2'>Poleras</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="" className='ml-2'>Jeans</label>
                        </div>
                    </div>
                    <button className='bg-pink-700 text-white w-full p-1 rounded-md'>
                        Aplicar
                    </button>
                </article> */}
            </div>
        </div>
    )
}

export default Sidebar;