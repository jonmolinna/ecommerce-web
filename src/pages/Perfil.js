import React, { useState } from 'react';
import Layout from '../layouts/Layout';

const Perfil = () => {
    const [isActive, setIsActive] = useState(true);

    const handleActive = () => setIsActive(!isActive);

    return (
        <Layout>
            <h1 className='text-2xl font-bold'>Perfil</h1>
            <article className='grid grid-cols-12 gap-x-4 gap-y-9'>
                <div className='col-span-12 md:col-span-4'>
                    <aside className='shadow-lg p-3 flex items-center'>
                        <small 
                            className='bg-pink-700 text-white h-11 w-11 text-4xl font-semibold flex items-center justify-center rounded-full'
                        >
                            K
                        </small>
                        <aside className='ml-3'>
                            <h3>Kendra Contreras</h3>
                            <small>kendra123@gmail.com</small>
                        </aside>
                    </aside>
                </div>
                <div className='col-span-12 md:col-span-8 shadow-lg p-3'>
                    <form className='grid grid-cols-12 gap-x-3 gap-y-4'>
                        <div className='flex flex-col col-span-12'>
                            <label htmlFor="">Nombres</label>
                            <input
                                type="text"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12'>
                            <label htmlFor="">Apellidos</label>
                            <input
                                type="text"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12'>
                            <label htmlFor="">Correo electrónico</label>
                            <input
                                type="text"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Documento de identidad </label>
                            <input
                                type="text"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Teléfono móvil</label>
                            <input
                                type="text"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Fecha de nacimiento </label>
                            <input
                                type="date"
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Genero</label>
                            <select
                                name=""
                                id=""
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            >
                                <option value="">- - -</option>
                                <option value="">Hombre</option>
                                <option value="">Mujer</option>
                            </select>
                        </div>
                        <button
                            disabled={isActive} 
                            className='disabled:bg-pink-500 bg-pink-700  col-span-12 p-2 rounded-md text-white'
                        >
                            Guardar
                        </button>
                    </form>
                    <button 
                    onClick={handleActive}
                        className='border border-pink-700 p-2 w-full rounded-md mt-3 text-pink-700 font-medium'
                    >
                        { isActive? 'Editar' : 'Cancelar'}
                    </button>
                </div>
            </article>
        </Layout>
    )
}

export default Perfil