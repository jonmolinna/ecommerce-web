import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';

import { AuthContext } from '../context/auth';

const initialForm = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const Register = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(null);
    const context = useContext(AuthContext);
    let history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    };

    const [createUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData } }){
            context.register(userData);
            setForm(initialForm);
            history.push('/');
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        },
        variables: {
            nombre: form.nombre,
            apellido: form.apellido,
            email: form.email,
            password: form.password,
            confirmPassword: form.confirmPassword
        },
    });

    return (
        <div className='w-full flex flex-col items-center'>
            <h2 className='mt-5 text-4xl tracking-widest'>
                {
                    loading? 'Cargando ...' : 'Dallase'
                }
            </h2>
            <div
                className='flex flex-col items-center w-11/12 max-w-md border-4 shadow-lg border-white bg-white rounded-md mt-3 p-3 md:py-3 md:px-10'
            >
                <h3 className='text-xl mb-6 font-normal'>
                    Crear cuenta
                </h3>
                <form
                    onSubmit={(e) => createUser(e.preventDefault())}
                    className='flex flex-col w-full'
                >
                    <input
                        className='mb-3 p-2 border-2 border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="text"
                        placeholder='Ingrese su nombre'
                        name='nombre'
                        value={form.nombre}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-2 border border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="text"
                        placeholder='Ingrese su apellido'
                        name='apellido'
                        value={form.apellido}
                        onChange={handleChange}
                    />
                    <input
                        className='mb-3 p-2 border-2 border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="email"
                        placeholder='Ingresa tu correo electronico'
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
                    <input
                        className='mb-3 p-2 border-2 border-neutral-300 rounded-md focus:outline-2 focus:outline-pink-700'
                        type="password"
                        placeholder='Repita su contraseña'
                        name='confirmPassword'
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        className='p-2 bg-pink-700 rounded-md text-white disabled:bg-pink-500 active:bg-pink-900'
                        type='submit'
                        disabled={!(form.nombre && form.apellido && form.email && form.password && form.confirmPassword)}
                    >
                        Crea tu cuenta
                    </button>
                </form>
                <p className='mt-4'>
                    ¿Tienes una cuenta?
                </p>
                <Link 
                    to='/login'
                    className='mt-2 p-2 border border-pink-700 rounded-md w-full text-center active:bg-pink-700 active:text-white'
                >
                    Inicia Sesión
                </Link>
            </div>
            {
                errors && <div className='shadow-md mt-4 mb-9 bg-white w-11/12 max-w-md border-4 border-white rounded-md p-3'>
                    {
                        Object.values(errors).map((value, index) => (
                            <p key={index} className="text-pink-700 font-semibold">
                                { value }
                            </p>
                        ))
                    }
                </div>
            }
        </div>
    )
};

const REGISTER_USER = gql`
    mutation register (
        $nombre: String!,
        $apellido: String!,
        $email: String!,
        $password: String!,
        $confirmPassword: String!,
    ) {
        register(
            input: {
                nombre: $nombre,
                apellido: $apellido,
                email: $email,
                password: $password,
                confirmPassword: $confirmPassword,
            }
        ) {
            id
            nombre
            apellido
            email
            token
        }
    }
`;

export default Register;