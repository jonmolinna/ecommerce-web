import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./routers/AppRouter";
import { AuthProvider } from "./context/auth";
import { CartProvider } from "./context/shoppingCar";
import { CategoryProvider } from "./context/categoryProduct";

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <CategoryProvider>
            <Router>
              <AppRouter />
            </Router>
          </CategoryProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
