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
                        <Link 
                            to='/mujer'
                            className='bg-pink-700 shadow-md shadow-pink-700/50 text-white text-center mt-2 p-1 rounded-lg'  
                        >
                            Mujer
                        </Link>
                        <Link 
                            to='/hombre'
                            className='bg-pink-700 shadow-md shadow-pink-700/50 text-white text-center mt-2 p-1 rounded-lg'
                        >
                            Hombre
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Sidebar;