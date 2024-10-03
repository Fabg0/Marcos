import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Crear la raíz de la aplicación
const root = createRoot(document.getElementById('root'));

// Renderizar la aplicación
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
