// Agenda.js
import React, { useState } from 'react';
import '../styles/agenda.css';
import Sidebar from '../components/sidebar';
import Inputscomponentes from '../components/formularios';

const Agenda = () => {
  const [nuevaCita] = useState({});

  const datosPersonales = ["Nombre", "Apellido", "Sexo", "Edad", "Departamento"]
  const domicilio = ["Calle", "Colonia", "Telefono", "C.P"]
  const antecedentes = ["Tipo", "Malestar", "Ultima consulta"]
  const camposCita = [
    { nombre: "Fecha", label: "Fecha", tipo: "date" },
    { nombre: "Hora", label: "Hora", tipo: "time" },
  ]

  const handleInputChange = () => {

  }
  const handleSubmit = () => {

  }
  return (
    <>
      <Sidebar />
      <div className="agenda-container">
        <h1>Agenda de Citas</h1>
        <div className="person">
          <h1>Datos personales</h1>
          <Inputscomponentes campos={datosPersonales} />
        </div>
        <div className="domicile">
          <h1>Domicilio</h1>
          <Inputscomponentes campos={domicilio} />
        </div>
        <div className="antec">
          <h1>Antecedentes</h1>
          <Inputscomponentes campos={antecedentes} />
        </div>
        <div className="horario">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              {camposCita.map((campo, index) => (
                <div key={index} className="form-group">
                  <label>{campo.label}:</label>
                  <input
                    type={campo.tipo}
                    name={campo.nombre}
                    value={nuevaCita[campo.nombre] || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}
            </div>
            <button type="submit">Agendar Cita</button>
          </form>
        </div>
      </div>
    </>
  )

}
export default Agenda