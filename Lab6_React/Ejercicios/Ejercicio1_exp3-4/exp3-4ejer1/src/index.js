import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Juego1 from './components/juego1'; // Cambia juego1 a Juego1
import Counter from './components/contador';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    </React.StrictMode>
  );

reportWebVitals();