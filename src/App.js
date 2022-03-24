import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routers/AppRouter';
import { AuthProvider  } from './context/auth';
import { CartProvider  } from './context/shoppingCar';

function App() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Router>
              <AppRouter />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;