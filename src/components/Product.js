import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, codigo, marca, precio, urlImage, createdAt } = product;
    let createdProduct = new Date(createdAt).getTime();
    let nowDay = new Date().getTime();
    let isNewProduct = (nowDay - createdProduct)/ (1000 * 3600 * 24) < 3;
    
    return (
        <Link 
            to={`/product/${id}`}
            className='shadow-lg bg-inherit'
        >
            <img
                className=''
                src={urlImage}
                alt={codigo}
            />
            <article className='p-2'>
                {
                    isNewProduct && (
                        <p className='inline-block px-1 text-xs bg-pink-600 text-white rounded-md'>
                            Nuevo
                        </p>
                    )
                }
                <h3 className='font-semibold'>
                    { marca }
                </h3>
                <p className='text-xs mb-3'>
                    { codigo }
                </p>
                <small className='font-semibold text-base'>
                    S/ { precio }
                </small>
            </article>
        </Link>
    )
}

export default Product