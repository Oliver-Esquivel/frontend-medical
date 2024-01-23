import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Inputscomponentes from "../components/formularios";
import Title from "../components/title";
import { routeApi } from '../routes/route';

const PhysicalExamen = () => {
  const exploracionf = [
    "peso", "t_a", "talla", "t_A", "temp", "fc", "Pulso", "frecuencia cardiaca", "peso ideal",
    "integridad corporal", "especificar", "marcha", "movimiento anormal", "Exploracion Fisica"
  ];

  const craneroCara = [
    "oidos", "nariz", "boca", "conducto_auditivo", "tabique",
    "timpano", "cornetes", "encias", "audicion", "mucosa", "dientes", "secrecion",
    "lengua", "faringe", "ojos", "agudeza_visual", "amigdalas", "parpados", "ojo_derecho",
    "ojo_izquierdo", "conjuntiva", "esclerotica", "od_correccion", "odontograma", "camara_anterior",
    "oi_correccion", "falta", "fondo_ojo", "obturada", "malformacion", "pupilas",
    "mmmppciiicppm_sup", "mmmppciiicppm_inf", "nota_de_exploracion"
  ];

  const cuello = [
    "piel", "pulso_caritedo", "ganglios_cervi", "tiroides", "Notadeexploracion"
  ]
  const torax = [
    "piel", "mamas_pezones", "movimiento_respi",
    "campo_pulmonar", "ritmo_cardiaco", "intensidad_ruido", "caract_latido", "notaexploracion",
  ]
  const abdomen = [
    "piel", "forma", "dolor",
    "consistencia", "viceromegalias", "peristalsis", "notas de exploracion",
  ]
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Realiza la solicitud POST usando fetch y agrega el token al header
      const response = await fetch(`${routeApi}/fisico`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'token'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(response)
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
            <Title title="Exploracion Fisica" />
            <Inputscomponentes campos={exploracionf} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Craneo cara" />
            <Inputscomponentes campos={craneroCara} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Cuello" />
            <Inputscomponentes campos={cuello} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Torax" />
            <Inputscomponentes campos={torax} onInputChange={handleInputChange} />
          </div>
          <div className="form-section">
            <Title title="Abdomen" />
            <Inputscomponentes campos={abdomen} onInputChange={handleInputChange} />
          </div>
          <button onClick={handleSubmit} className="button">Enviar Datos al Backend</button>
        </div>
      </div>
    </>
  )
}

export default PhysicalExamen;