import React, { useContext, useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../context/auth';
import { Capitalize } from '../util/capitalize';
import { chatAt } from '../util/chatAt';
import { gql, useQuery } from '@apollo/client';

const initialForm = {
    nombre: "",
    apellido: "",
    dni: "",
    telefono: "",
    fech_nacimiento: "",
    genero: "",
};

const Perfil = () => {
    const [isActive, setIsActive] = useState(true);
    const [form, setForm] = useState(initialForm);
    const { logout, user } = useContext(AuthContext);
    let history = useHistory();

    const handleActive = () => setIsActive(!isActive);

    const handleLogout = () => {
        logout();
        history.push('/');
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const { data } = useQuery(GET_ONE_USER, {
        variables: {
            userId: user.id
        },
    });

    useEffect(() => {
        if (data && data.getUser) {
            const { apellido, dni, fech_nacimiento, genero, nombre, telefono } = data.getUser;
            setForm({
                ...form,
                nombre: nombre? nombre: '',
                apellido: apellido? apellido : '',
                dni: dni? dni: '',
                telefono: telefono? telefono : '',
                fech_nacimiento: fech_nacimiento? fech_nacimiento : '',
                genero: genero? genero : '',
            })
        }

    }, [data]);

    console.log('YOOOO', data);

    console.log('YOOOOOOOOOOOOOO');

    return (
        <Layout>
            <h1 className='text-2xl font-bold'>Perfil</h1>
            <article className='grid grid-cols-12 gap-x-4 gap-y-9'>
                <div className='col-span-12 md:col-span-4'>
                    <aside className='shadow-lg p-3 flex items-center'>
                        <small 
                            className='bg-pink-700 text-white h-11 w-11 text-3xl font-semibold flex items-center justify-center rounded-full'
                        >
                            { chatAt(user.nombre) }
                        </small>
                        <aside className='ml-3'>
                            <h3 className='font-medium'>
                                { Capitalize(user.nombre) } { Capitalize(user.apellido) }
                            </h3>
                            <small>
                                { user.email }
                            </small>
                        </aside>
                    </aside>
                    <button
                        onClick={handleLogout}
                        className='bg-pink-500 hover:bg-pink-700 text-white rounded-md w-full mt-5 py-2'
                    >
                        CERRAR SESIÓN
                    </button>
                </div>
                <div className='col-span-12 md:col-span-8 shadow-lg p-3'>
                    <form
                        onSubmit={handleSubmit} 
                        className='grid grid-cols-12 gap-x-3 gap-y-4'
                    >
                        <div className='flex flex-col col-span-12'>
                            <label htmlFor="">Nombres</label>
                            <input
                                type="text"
                                disabled={isActive}
                                name='nombre'
                                value={form.nombre}
                                onChange={handleChange}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12'>
                            <label htmlFor="">Apellidos</label>
                            <input
                                type="text"
                                disabled={isActive}
                                name='apellido'
                                value={form.apellido}
                                onChange={handleChange}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Documento de identidad </label>
                            <input
                                type="text"
                                disabled={isActive}
                                name='dni'
                                value={form.dni}
                                onChange={handleChange}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Teléfono móvil</label>
                            <input
                                type="text"
                                disabled={isActive}
                                name='telefono'
                                value={form.telefono}
                                onChange={handleChange}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Fecha de nacimiento </label>
                            <input
                                type="date"
                                disabled={isActive}
                                name='fech_nacimiento'
                                value={form.fech_nacimiento}
                                onChange={handleChange}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            />
                        </div>
                        <div className='flex flex-col col-span-12 md:col-span-6'>
                            <label htmlFor="">Genero</label>
                            <select
                                name="genero"
                                value={form.genero}
                                onChange={handleChange}
                                disabled={isActive}
                                className='px-2 py-1 disabled:text-gray-400 bg-inherit mt-1 border border-gray-400 rounded-md focus:outline-2 focus:outline-pink-700'
                            >
                                <option value="">- - -</option>
                                <option value="m">Hombre</option>
                                <option value="f">Mujer</option>
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
};

const GET_ONE_USER = gql`
    query getUser(
        $userId: ID!
    ){
        getUser(
            userId: $userId
        ){
            id
            nombre
            apellido
            dni
            telefono
            fech_nacimiento
            genero
        }
    }
`;

export default Perfil