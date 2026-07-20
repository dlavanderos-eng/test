import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  // Consumir una API real al cargar el componente
  useEffect(() => {
    fetch('https://api.github.com/users?per_page=5')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error("Error cargando usuarios:", err));
  }, []);

  // Filtrar la lista según lo que escriba el usuario
  const usuariosFiltrados = usuarios.filter(user =>
    user.login.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '500px', margin: '40px auto', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>🚀 Panel de Control & Despliegue</h2>
      <p id="mensaje-bienvenida" style={{ color: '#666', textAlign: 'center' }}>¡React y GitHub Actions funcionando de la mano con éxito!</p>
      
      <input
        type="text"
        placeholder="Buscar usuario de GitHub..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '15px' }}
      />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {usuariosFiltrados.map(user => (
          <li key={user.id} style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={user.avatar_url} alt={user.login} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <a href={user.html_url} target="_blank" rel="noreferrer" style={{ color: '#0969da', textDecoration: 'none', fontWeight: 'bold' }}>
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);