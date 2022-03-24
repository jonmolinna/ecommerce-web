import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [],
};

const CartContext = createContext({
    cart: [],
    addToCart: (product) => {},
    // deleteOneProductToCar: (product) => {},
});

function cartReducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_CART': {
            let product = action.payload;
            let productInCart = state.cart.find(item => item.id === product.id && item.talla === product.talla);
            return productInCart?
            {
                ...state,
                cart: state.cart.map(item => item.id === product.id && item.talla === product.talla? {...item, quantity: item.quantity + 1} : item)
            } : {
                ...state,
                cart: [...state.cart, { ...product, quantity: 1}],
            }
        }
        case 'DELETE_ONE_PRODUCT_FROM_CART': {
            let product = action.payload;
            console.log('YOOOO>>>>D', product);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== product.id && item.talla === product.talla),
            }
        }
        case 'ADD_ONE_QUANTITY_CART': {
            return {
                ...state,
            }
        }
        case 'REMOVE_ONE_QUANTITY_CART': {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
};

function CartProvider(props) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart (product) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    };

    function deleteOneProductToCar(product) {
        dispatch({
            type: 'DELETE_ONE_PRODUCT_FROM_CART',
            payload: product,
        })
    };

    return (
        <CartContext.Provider
            value={{ cart: state.cart, addToCart, deleteOneProductToCar }}
            { ...props }
        />
    )
};

export { CartContext, CartProvider };
