import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    let auth
    auth = null;
    auth = true

   

    // Si está autenticado muestra el elemento, si no, redirige a /login
    return auth ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;