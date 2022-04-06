import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Carrito from "../pages/Carrito";
import Hombre from "../pages/Hombre";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Mujer from "../pages/Mujer";
import Perfil from "../pages/Perfil";
import ProductView from "../pages/ProductView";
import Register from "../pages/Register";

import { AuthContext } from "../context/auth";
import Error404 from "../pages/Error404";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/mujer" component={Mujer} />
      <Route exact path="/hombre" component={Hombre} />
      <Route
        exact
        path="/login"
        render={() => (user ? <Redirect to="/perfil" /> : <Login />)}
      />
      <Route
        exact
        path="/register"
        render={() => (user ? <Redirect to="/perfil" /> : <Register />)}
      />
      <Route
        exact
        path="/perfil"
        render={() => (user ? <Perfil /> : <Redirect to="/login" />)}
      />
      <Route exact path="/product/:IdProduct" component={ProductView} />
      <Route exact path="/carrito" component={Carrito} />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

export default AppRouter;
