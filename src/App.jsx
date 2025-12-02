import { useState } from "react";
import StackTecnologias from './components/StackTecnologias';
import FormularioTecnologia from './components/FormularioTecnologia';
import ToggleHabilidades from './components/ToggleHabilidades';

function App() {
  const [tecnologias, setTecnologias] = useState([
    "Python", "SQL", "HTML5/CSS3"
  ]);

  const agregarTecnologia = (tec) => setTecnologias([...tecnologias, tec]);

  const habilidades = ["Trabajo en equipo", "Comunicación", "Resolución de problemas"];

  return (
    <div>
      <StackTecnologias tecnologias={tecnologias} />
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
      <ToggleHabilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
