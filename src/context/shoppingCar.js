import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [],
};

const CartContext = createContext({
    cart: [],
    addToCart: (product) => {},
    deleteOneProductToCar: (product) => {},
    sumOneQuantityProductToCar: (product) => {},
    resOneQuantityProductToCar: (product) => {},
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
            let productCart = state.cart.find(item => item.id === product.id && item.talla === product.talla);
            return productCart?
            {
                ...state,
                cart: state.cart.filter(item => item.idShopping !== productCart.idShopping),
            } : {
                ...state
            }
        }
        case 'ADD_ONE_QUANTITY_CART': {
            let product = action.payload;
            let productCart = state.cart.find(item => item.id === product.id && item.talla === product.talla);
            return productCart?.quantity > 0 ?
            {
                ...state,
                cart: state.cart.map(item => item.id === product.id && item.talla === product.talla? { ...item, quantity: item.quantity + 1} : item)
            } : {
                ...state,
            }
        }
        case 'REMOVE_ONE_QUANTITY_CART': {
            let product = action.payload;
            let productCart = state.cart.find(item => item.id === product.id && item.talla === product.talla);
            return productCart?.quantity > 1 ?
            {
                ...state,
                cart: state.cart.map(item => item.id === product.id && item.talla === product.talla? { ...item, quantity: item.quantity - 1} : item)
            } : {
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

    function sumOneQuantityProductToCar(product) {
        dispatch({
            type: 'ADD_ONE_QUANTITY_CART',
            payload: product,
        })
    };

    function resOneQuantityProductToCar(product) {
        dispatch({
            type: "REMOVE_ONE_QUANTITY_CART",
            payload: product,
        })
    }

    return (
        <CartContext.Provider
            value={{ cart: state.cart, addToCart, deleteOneProductToCar, sumOneQuantityProductToCar, resOneQuantityProductToCar }}
            { ...props }
        />
    )
};

export { CartContext, CartProvider };
