import React, { useState } from 'react';
import Inputscomponentes from '../components/formularios';
import { routeApi } from '../routes/route';
import Sidebar from '../components/sidebar';
import Title from '../components/title';

const ExamenMedico = () => {
  const ident = ["ingreso","examen","periodo","otros","fecha",]
  const ficha = [ 
    "nombre","apellido", "edad","sexo","edoCivil","turno","fecha_nacimiento","planta",
  "tipo_contrato","departamento","nombre_supervisor","antiguedad_planta","antiguedad_puesto","puesto_trabajo",
  "domicilio",
]
const antecedentes =[
     "lugares_donde_laboro","labores_desempeño_tiempo","agentes_expuestos","productos_elaborados",
"horas_diarias_trabajadas","dias_trabajados","descansos_fijos_rolados","puesto_actividad","accidentes_trabajo",
"incapacidad","examen_laboratorio","actividades_extralaborales","cuales","riesgo_ergonomico","especifique",
"analisis_ergonomico",
]
const personalPatoligo = [ 
   "habitacion","habitada_por","no_habitaciones","animales_en_casa","tabaquismo",
"no_años","cantidad_por_dia","alcoholismo","frecuencia","toxicomanias","higiene","alimentacion",
"inmunizacion","actividades_deportivas"
]
  const enfermedadesPatologicas = [
    "asmatico", "diabeticos", "siquiatrico", "epileptico", "neoplasticos", "artritico",
    "obesidad", "cardiovascular", "hipertensivo", "congenitos",
    "hematologico","audiologo","tuberculosos","sifilitico","ulcerosos",
    "litiasicos"
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
      const response = await fetch(`${routeApi}/identificacion`, {
        method: 'POST',
        'credentials': 'include',
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
      <Title title="Examen Medico" />
      <Inputscomponentes campos={ident} onInputChange={handleInputChange} />
    </div>

    <div className="form-section">
      <Title title="Ficha de identificacion" />
      <Inputscomponentes campos={ficha} onInputChange={handleInputChange} />
    </div>

    <div className="form-section">
      <Title title="Antecedentes laborales" />
      <Inputscomponentes campos={antecedentes} onInputChange={handleInputChange} />
    </div>

    <div className="form-section">
      <Title title="Antecedente personal no patologico" />
      <Inputscomponentes campos={personalPatoligo} onInputChange={handleInputChange}  />
    </div>

    <div className="form-section">
      <Title title="Hantecedentes Heredo-familiares" />
      <Inputscomponentes campos={enfermedadesPatologicas} onInputChange={handleInputChange} />
    </div>
        <button onClick={handleSubmit} className='button '>Enviar Datos al Backend</button>
  </div>
      </div>
    </>
  );
};

export default ExamenMedico;

