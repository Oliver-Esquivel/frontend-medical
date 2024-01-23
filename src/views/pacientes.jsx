// src/components/Pacientes.js

import React, { useState, useEffect } from 'react';
import { routeApi } from '../routes/route';

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer tuToken', // Agrega esta línea si necesitas autenticación
    };

    fetch(`${routeApi}/identificacion/`, { headers })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de la API: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Datos recibidos de la API:', data);

        if (Array.isArray(data)) {
          setPacientes(data);
        } else {
          throw new Error('Los datos de la API no son un array válido.');
        }
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log('Estado actual de pacientes:', pacientes);
  }, [pacientes]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar datos: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      {pacientes.length > 0 ? (
        pacientes.map(paciente => (
          <div key={paciente.id} className="card">
            <h2>{paciente.nombre}</h2>
            <p>Edad: {paciente.edad}</p>
            <p>Área: {paciente.area}</p>
            <p>Departamento: {paciente.departamento}</p>
            <button>Ver Detalles</button>
          </div>
        ))
      ) : (
        <p>No hay pacientes disponibles.</p>
      )}
    </div>
  );
};

export default Pacientes;
