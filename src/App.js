import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './routers/AppRouter';
import { AuthProvider  } from './context/auth'



function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
            <AppRouter />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;