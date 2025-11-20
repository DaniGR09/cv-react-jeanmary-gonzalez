import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import './App.css'

function App() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <CabeceraCV />
        <Perfil />
        <Experiencia />
        <Educacion />
        <footer style={styles.footer}>
          <p>© 2025 - CV creado con React</p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto'
  },
  container: {
    width: '100%',
    padding: '0',
    backgroundColor: '#ecf0f1',
    borderRadius: '15px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
    overflow: 'hidden'
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    color: '#7f8c8d',
    backgroundColor: 'white',
    marginTop: '0'
  }
};

export default App;