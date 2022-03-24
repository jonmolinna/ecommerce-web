import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { AuthContext } from '../context/auth';
import { LOGIN_USER } from '../graphql/mutation';

const initialForm = {
    email: '',
    password: '',
};

const Login = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(null);
    const context = useContext(AuthContext);
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    };

    const [ loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData } }){
            context.login(userData);
            setForm(initialForm);
            history.push('/');
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: {
            email: form.email,
            password: form.password,
        }
    });

    return (
        <div className='w-full flex flex-col items-center'>
            <Link
                to='/' 
                className='mt-5 text-4xl tracking-widest'
            >
                Dallase
            </Link>
            <div
                className='flex flex-col items-center w-11/12 max-w-md border-4 shadow-lg border-white bg-white rounded-md mt-3 py-3 px-3 md:py-5 md:px-10'
            >
                <h3 className='text-xl mb-2'>Iniciar sesión</h3>
                {
                    loading && (
                        <p className='text-center font-semibold mb-2 text-lg'>
                            Cargando ...
                        </p>
                    )
                }
                {
                    errors && (
                        <div className='bg-pink-500 w-full p-2 mb-3 rounded-md text-center'>
                            <p className='text-white font-semibold text-sm'>
                                Credenciales incorrectas
                            </p>
                        </div>
                    )
                }
                <form
                    onSubmit={e => loginUser(e.preventDefault())} 
                    className='flex flex-col w-full'
                >
                    <input
                        className='mb-3 p-2 border-2 border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="email"
                        placeholder='Ingrese su correo'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-2 border-2 border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="password"
                        placeholder='Ingrese su contraseña'
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                    <button
                        className='p-2 bg-pink-700 rounded-md text-white disabled:bg-pink-500 active:bg-pink-900'
                        type='submit'
                        disabled={!(form.email && form.password)}
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className='mt-4'>
                    ¿Aún no tienes una cuenta?
                </p>
                <Link
                    to='/register'
                    className='mt-2 p-2 border border-pink-700 rounded-md w-full text-center active:bg-pink-700 active:text-white'
                >
                    Crea tu cuenta
                </Link>
            </div>
        </div>
    )
};

export default Login;