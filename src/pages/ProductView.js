import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/client';
import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

import { GET_ONE_PRODUCT } from '../graphql/query';
import ProductViewMessage from '../components/ProductViewMessage';
import { AuthContext } from '../context/auth';
import { CartContext } from '../context/shoppingCar';

const ProductView = () => {
    let { IdProduct } = useParams();
    const [errors, setErrors] = useState(null);
    const [talla, setTalla] = useState('');
    const { user } = useContext(AuthContext);
    const { addToCart } = useContext(CartContext);

    const { data, loading } = useQuery(GET_ONE_PRODUCT, {
        variables: {
            productId: IdProduct
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].message);
        }
    });

    const product = data?.getProductById;

    const handleAddProductCar = () => {
        if (!user) return  toast.custom((t) => ( 
            <ProductViewMessage 
                t={t}
                message='Inicie sesión para comprar'
                router='INICIAR SESIÓN'
                link='login'
            />
        ));

        const productCart = {
            id: product.id,
            codigo: product.codigo,
            marca: product.marca,
            color: product.color,
            talla: talla,
            imagen: product.urlImage,
            precio: product.precio,
        };
        addToCart(productCart);

        toast.custom((t) => ( 
            <ProductViewMessage 
                t={t}
                message='Agregando correctamente'
                router='IR AL CARRITO'
                link='carrito'
            />
        ))
    };

    return (
        <Layout>
            {
                loading? (
                    <p className='text-2xl text-center font-bold h-screen w-full pt-10'>
                        Cargando ....
                    </p>
                ) : (
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
                                    <small>{ product.codigo }</small>
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
                                        value={talla}
                                        onChange={e => setTalla(e.target.value)}
                                        className='p-2 mb-2 border border-gray-400 focus:outline focus:outline-pink-700'
                                    >
                                        <option value="">Elegir talla</option>
                                        <option value="s">S</option>
                                        <option value="m">M</option>
                                        <option value="l">L</option>
                                    </select>
                                    <button
                                        className='bg-pink-700 active:bg-pink-900 disabled:bg-pink-500 p-2 rounded-md text-white'
                                        disabled={!talla}
                                        onClick={handleAddProductCar}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </aside>
                        </article>
                        <article>
                            <h3 className='font-semibold text-lg'>Información</h3>
                            <p>Conoce los detalles del producto</p>
                            <div className='p-3 mt-2 shadow-md'>
                                <p><b className='font-medium'>Género: </b>{product?.genero }</p>
                                <p><b className='font-medium'>Categoria: </b>{product?.category.category }</p>
                                <p><b className='font-medium'>Color: </b>{product?.color }</p>
                                <p><b className='font-medium'>Material: </b>{product?.material }</p>
                                {
                                    product.detalles && <ul style={{listStyleType: 'circle'}} className="pl-7">
                                        {
                                            product.detalles.map(detalle => (
                                                <li key={detalle.id}>
                                                    { detalle.detalle }
                                                </li>
                                            ))
                                        }
                                    </ul> 
                                }
                            </div>
                        </article>
                    </div>
                    )
                )
            }
            {
                errors && (
                    <div className='h-screen shadow-md text-center'>
                        <p className='text-black font-semibold text-2xl'>No existe producto</p>
                    </div>
                )
            }
            <Toaster
                position='bottom-center'
                toastOptions={{
                    duration: 1000
                }}
            />
        </Layout>
    )
};

export default ProductView;