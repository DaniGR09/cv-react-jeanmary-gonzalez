import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import './App.css'

function App() {
  return (
    <div style={styles.container}>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
      <footer style={styles.footer}>
        <p>© 2025 - CV creado con React</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ecf0f1',
    minHeight: '100vh'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    color: '#7f8c8d',
    marginTop: '20px'
  }
};

export default App;