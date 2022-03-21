import React, { createContext, useReducer } from 'react';

const initialState = {
    user: null,
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
        dispatch({
            type: 'REGISTER',
            payload: userData,
        })
    }

    function login(userData) {
        dispatch({
            type: 'LOGIN',
            payload: userData,
        })
    }

    function logout() {
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