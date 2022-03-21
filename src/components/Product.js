import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, codigo, marca, precio, urlImage } = product;

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