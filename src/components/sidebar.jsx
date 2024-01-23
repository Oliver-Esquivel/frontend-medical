// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.style.css'; // Archivo de estilos para la barra lateral
import alfa from '../images/alfa.jpeg'
import examenmedico from '../images/examenM.png'
import illness from '../images/illnes.png'
import fisico from '../images/fisico.png'
import laboratorio from '../images/laboratorio.png'
import consulta from '../images/consulta.png'
import personas from '../images/people.png'
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { useNavigate } from 'react-router-dom';
import { routeApi } from "../routes/route";


const Sidebar = () => {

  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate('/', { replace: true });
  };

  const logout = async () => {
    try {
      const logout = await fetch(`${routeApi}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (logout) {
        const responseData = await logout.json()
        console.log(responseData)
        redirectToLogin()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <div className="sidebar">
        <img src={alfa} alt="Imagen de la barra lateral" />
        <div className="options">
          <div className="group">
            <div className="group-title">Tipos de examen</div>
            <Link to="/examen" className="option">
              <img src={examenmedico} alt="Icono de Opción 1" className="option-icon" />
              <span>Identificacion</span>
            </Link>
            <Link to="/illnes" className="option">
              <img src={illness} alt="Icono de Opción 2" className="option-icon" />
              <span>Enfermedades</span>
            </Link>
            <Link to="/fisico" className="option">
              <img src={fisico} alt="Icono de Opción 3" className="option-icon" />
              <span>Examen Fisico</span>
            </Link>
            <Link to="/laboratorio" className="option">
              <img src={laboratorio} alt="Icono de Opción 4" className="option-icon" />
              <span>Laboratorio</span>
            </Link>
          </div>
          <div className="group">
            <div className="group-title">Otras opciones</div>
            <Link to="/agenda" className="option">
              <img src={consulta} alt="Icono de Opción 5" className="option-icon" />
              <span>Agendar</span>
            </Link>
            <Link to="/pacientes" className="option">
              <img src={personas} alt="Icono de Opción 6" className="option-icon" />
              <span>consultas</span>
            </Link>
            {/* Agrega más opciones según sea necesario */}
          </div>
        </div>
        <Link to="/" className='option' >
          <button className="button" onClick={logout}>Cerrar sesion</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
