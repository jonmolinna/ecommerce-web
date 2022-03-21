import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Carrito from '../pages/Carrito';
import Hombre from '../pages/Hombre';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Mujer from '../pages/Mujer';
import Perfil from '../pages/Perfil';
import ProductView from '../pages/ProductView';
import Register from '../pages/Register';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mujer" component={Mujer} />
            <Route exact path="/hombre" component={Hombre} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/product/:ID" component={ProductView} />
            <Route exact path="/carrito" component={Carrito} />
        </Switch>
    )
}

export default AppRouter