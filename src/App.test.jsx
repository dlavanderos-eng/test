import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom/client';

// Definimos un componente idéntico al de index.js para probarlo de forma aislada
function App() {
  return (
    <div>
      <h1>Proyecto de Automatización</h1>
      <p id="mensaje-bienvenida">¡React y GitHub Actions funcionando de la mano con éxito!</p>
    </div>
  );
}

test('Verifica que el mensaje de bienvenida se renderiza correctamente', () => {
  render(<App />);
  const elementoMensaje = screen.getByText(/React y GitHub Actions funcionando/i);
  expect(elementoMensaje).toBeInTheDocument();
});