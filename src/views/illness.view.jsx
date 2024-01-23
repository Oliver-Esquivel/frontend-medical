import React, { useState } from "react";
import Inputscomponentes from "../components/formularios";
import { routeApi } from '../routes/route';
import Sidebar from "../components/sidebar";
import Title from '../components/title';

const IllnesExamen = () => {

  const antecedentes = [
    "dataExamenMedico", "alergico", "traumatico", "quirurgico", "icterico",
    "transfuncional", "parasitos", "sarampion", "rubeola", "otitis",
    "varicela", "escarlatina", "venereas", "parotiditis", "amigdalitis",
    "bronquitis", "comentarios",
  ]
  const ginecoObstretico = [
    "menarca", "ritmo", "ciclo_menstrual", "caracteristicas", "fum", "inicio_vida_sex",
    "gestacion", "partos", "cesarea", "aborto", "control_fertilidad", "infeccion",
  ]
  const masculino = [
    "enfermedad_prostata", "desordenes_reproductivos", "dolor_testicular", "orina_frecuente",
    "masa_testicular", "vasectomia", "infeccion_pen", "infeccion_prostata", "infeccion_testicular",
  ]
  const illness = [
    "genicouterino",
    "cardivascular",
    "Neurologico",
    "endocrino",
    "digestivo",
    "hematologico",
    "respiratorio",
    "piel_tegumentos",
    "musculo_esqueletico",
    "psiquiatrico"
  ];
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
      const response = await fetch(`${routeApi}/illness`, {
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
        // Guarda el nuevo token de acceso si es necesario
        console.log(responseData)
        // Continúa con la lógica de redirección u otras acciones
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
            <Title title="Antecedente Personal Patologico" />
            {<Inputscomponentes campos={antecedentes} onInputChange={handleInputChange} />}
          </div>
          <div className="form-section">
            <Title title="Antecedentes gineco obstetrico" />
            {<Inputscomponentes campos={ginecoObstretico} onInputChange={handleInputChange} />}
          </div>
          <div className="form-section">
            <Title title="Antecedentes masculinos" />
            {<Inputscomponentes campos={masculino} onInputChange={handleInputChange} />}
          </div>
          <div className="form-section">
            <Title title="Interrogatorio por aparatos y sistemas" />
            {<Inputscomponentes campos={illness} onInputChange={handleInputChange} />}
          </div>
          <button onClick={handleSubmit} className="button">Enviar Datos al Backend</button>
        </div>
      </div>
    </>
  )
}
export default IllnesExamen;

