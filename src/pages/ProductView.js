import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MenuFooter from '../components/MenuFooter';
import { gql, useQuery } from '@apollo/client';

const ProductView = () => {
    const { data } = useQuery(GET_ONE_PRODUCT, {
        variables: {
            productId: '6234a4f88868ff64a3045774'
        },
    });

    const product = data?.getProductById;

    console.log('Yoooo', product);

    return (
        <div className="relative">
            <Menu />

            {
                product && (
                <div className='container p-3 mx-auto flex flex-col'>
                    <article className='grid grid-cols-12 gap-x-4 gap-y-5'>
                        <aside className='col-span-12 md:col-span-7 border'>
                            <img
                                src={product.urlImage}
                                alt={product.marca}
                            />
                        </aside>
                        <aside className='col-span-12 md:col-span-5 border'>
                            <div className='p-3 shadow-md flex flex-col'>
                                <small>
                                    { product.codigo }
                                </small>
                                <h3 className='font-semibold text-lg'>
                                    { product.marca }
                                </h3>
                                <p className='mb-2 font-normal text-lg'>
                                    { product.descr }
                                </p>
                                <div className='text-center mb-2'>
                                    <p className='font-bold text-3xl'>
                                        S/. { product.precio }
                                    </p>
                                </div>
                                <select 
                                    name=""
                                    id=""
                                    className='p-2 mb-2 border border-gray-400 focus:outline focus:outline-pink-700'
                                >
                                    <option value="">Elegir talla</option>
                                    <option value="">S</option>
                                    <option value="">M</option>
                                    <option value="">L</option>
                                </select>
                                <button
                                    className='bg-pink-700 active:bg-pink-900 disabled:bg-pink-500 p-2 rounded-md text-white'
                                    disabled={true}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </aside>
                    </article>
                    <article>
                        <h3>Información</h3>
                    </article>
                </div>
                )
            }

            <Footer />
            <MenuFooter />
        </div>
    )
}

const GET_ONE_PRODUCT = gql`
    query getProductById (
        $productId: ID!
    ){
        getProductById(
            productId: $productId
        ){
            id
            codigo
            marca
            descr
            precio
            material
            color
            urlImage
            genero
        }
    }
`;

export default ProductView;