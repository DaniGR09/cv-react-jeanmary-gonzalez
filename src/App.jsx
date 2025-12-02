import { cabecera, perfil, experiencias, educacion } from './cvData';
import CabeceraCV from './components/CabeceraCV';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';

function App() {
  return (
    <div>
      <CabeceraCV {...cabecera} />
      <Perfil resumen={perfil} />
      <Experiencia experiencias={experiencias} />
      <Educacion formacion={educacion} />
    </div>
  );
}

export default App;
