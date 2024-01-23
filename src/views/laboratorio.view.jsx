import React, { useState } from "react";
import { routeApi } from '../routes/route';
import Inputscomponentes from "../components/formularios";
import Sidebar from "../components/sidebar";
import Title from "../components/title";

const Laboratorio = () => {

  const [formData, setFormData] = useState({});
  const genitales = [
    "forma", "piel", "masa", "ganglios", "dolor"
  ]
  const extremidadesSup = [
    "estructura", "pielSup",
    "pulsoSup", "reflejosSup", "sensibilidad_Sup", "fuerzaMuscular_Sup", "otraCaractSup",
    "manos",
  ]
  const estructuraInf = [
    "estructura_Inf", "pielInf", "pulsoInf", "reflejos_Inf", "sensibilidad_Inf",
    "fuerzaMuscular_Inf", "otraCaract_Inf", "pies", "uñas", "NotaExploracion_Extremidades"
  ]
  const exploracionPsico = [
    "aspecto", "afectivas", "conducta_motora", "funcion_intelectual", "atencion",
    "juicio", "asociacion_de_ideas", "orientacion", "memoria", "lenguaje", "sensibilidad",
    "motricidad", "coordinacion", "reflejosPsi", "equilibrio", "otros", "NotaExploracion_psi",
  ]
  const laboratorioyGabinete = [


    "bh",
    "qs",
    "grupo_rh",
    "ego",
    "audiometria",
    "rx_Torax",
    "rx_Columna",
    "exudado_Faringeo",
    "copro"
  ];
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Realiza la solicitud POST usando fetch y agrega el token al header
      const response = await fetch(`${routeApi}/laboratorio`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'token'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
      } else {
        console.error('Error al enviar datos al backend:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <div className="form-section">
            <Title title="Genitales" />
            <Inputscomponentes campos={genitales} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Extremidades superiores" />
            <Inputscomponentes campos={extremidadesSup} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Extremidades inferiores" />
            <Inputscomponentes campos={estructuraInf} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Exploracion Psiconeurologica" />
            <Inputscomponentes campos={exploracionPsico} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Examenes de laboratorio y gabinete" />
            <Inputscomponentes campos={laboratorioyGabinete} onInputChange={handleInputChange} />
          </div>
          <button onClick={handleSubmit} className="button">Enviar Datos al Backend</button>
        </div>
      </div>
    </>
  );
};


export default Laboratorio;
