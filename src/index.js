import React from 'react';
import ReactDOM from 'react-dom/client';

// Este es tu primer componente funcional de React
function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Proyecto de Automatización</h1>
      <p id="mensaje-bienvenida">¡React y GitHub Actions funcionando de la mano con éxito!</p>
    </div>
  );
}

// Vinculamos el componente con el <div id="root"> de tu index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);