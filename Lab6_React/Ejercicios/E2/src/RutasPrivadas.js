import React from 'react';
import { Navigate } from 'react-router-dom';

// Componente RutaPrivada
const RutaPrivada = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default RutaPrivada;
