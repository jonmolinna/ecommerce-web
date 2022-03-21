import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    

    return (
        <div className='bg-pink-700 sticky z-50 top-0'>
            <div className='container mx-auto p-3 text-center md:flex justify-between items-center'>
                <Link 
                    to='/'
                    className='text-white font-semibold text-3xl tracking-widest'
                >
                    Dallase
                </Link>
                <div className='hidden md:flex items-center text-black border md:flex-1 mx-24 bg-white p-1 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <form className='flex-1 ml-3'>
                        <input
                            type="search"
                            className='outline-none w-full'
                            placeholder='Buscar ejm Polos'
                        />
                        <button className='hidden'>Search</button>
                    </form>
                </div>
                <div className='hidden md:flex'>
                    <Link
                        to='/carrito'
                        className='text-white flex flex-col items-center mr-3 hover:text-gray-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                        </svg>
                        <p>Carrito</p>
                    </Link>
                    <Link
                        to='/perfil'
                        className='text-white flex flex-col items-center hover:text-gray-300'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        <p>Cuenta</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Menu