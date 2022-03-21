import React from 'react';
import Product from './Product';
import { gql, useQuery } from '@apollo/client';

const Products = () => {
    const {  data, loading } = useQuery(GET_ALL_PRODUCTS);

    return (
        <div>
            {
                loading? (
                    <p className='text-center text-2xl font-bold'>Cargando ...</p>
                ) : (
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-9'>
                    {
                        data?.getAllProducts && data.getAllProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ))
                    }
                </div>
                )
            }
        </div>
    )
};

const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            id
            codigo
            marca
            precio
            urlImage
        }
    }
`;

export default Products;