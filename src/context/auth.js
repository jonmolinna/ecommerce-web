import React, { createContext, useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null,
};

if (localStorage.getItem('e-commerce-dallase')) {
    const decodedToken = jwtDecode(localStorage.getItem('e-commerce-dallase'));

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('e-commerce-dallase')
    } else {
        initialState.user = decodedToken;
    }
};

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    register: (userData) => {},
    logout: () => {}
});

function authReducer(state, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            }
        default:
            return state;
    }
};

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    function register(userData) {
        localStorage.setItem('e-commerce-dallase', userData.token);
        dispatch({
            type: 'REGISTER',
            payload: userData,
        })
    };

    function login(userData) {
        localStorage.setItem('e-commerce-dallase', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData,
        })
    };

    function logout() {
        localStorage.removeItem('e-commerce-dallase');
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <AuthContext.Provider
            value={{ user: state.user, register, login, logout }}
            { ...props }
        />
    )
};

export { AuthContext, AuthProvider}