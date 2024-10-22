import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Filtros from './Components/Filtros';
import ListaMascotas from './Components/ListaMascotas';
import DetallesMascota from './Components/DetallesMascota';
import FormularioAdopcion from './Components/FormularioAdopcion';

function App() {
  const [filters, setFilters] = useState({
    tipo: '',
    estado: '',
    edad: '',
    genero: ''
  });

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then((response) => response.json())
      .then((data) => setMascotas(data.data))
      .catch((error) => console.error('Error fetching pets:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Formulario de Adopción de Mascotas</h1>
        <Filtros setFilters={setFilters} />
        
        <Routes>
          <Route 
            path="/" 
            element={<ListaMascotas filters={filters} mascotas={mascotas} />} 
          />
          
          <Route 
            path="/mascota/:id" 
            element={<DetallesMascota mascotas={mascotas} />} 
          />

          <Route 
            path="/mascota/:id/adopcion" 
            element={<FormularioAdopcion />} 
          />
        </Routes>
        
        <Link to="/">
          <button>Volver a la lista de mascotas</button>
        </Link>
      </div>
    </Router>
  );
}

export default App;
