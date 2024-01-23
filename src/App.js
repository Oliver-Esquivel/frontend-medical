import { Routes, Route } from "react-router-dom";
import Login from "./views/login.view";
import ExamenMedico from "./views/examenMedico.view";
import IllnesExamen from "./views/illness.view";
import Laboratorio from "./views/laboratorio.view";
import PhysicalExamen from "./views/physical.view";
import Agenda from "./views/agenda";
import Pacientes from "./views/pacientes";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/examen" element={<ExamenMedico />} />
      <Route path="/illnes" element={<IllnesExamen />} />
      <Route path="/laboratorio" element={<Laboratorio />} />
      <Route path="/fisico" element={<PhysicalExamen />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/pacientes" element={<Pacientes />} />
    </Routes>
  );
}

export default App;
