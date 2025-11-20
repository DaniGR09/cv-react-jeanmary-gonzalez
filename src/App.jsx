import CabeceraCV from './components/CabeceraCV'
import Perfil from './components/Perfil'
import StackTecnologias from './components/StackTecnologias'
import Experiencia from './components/Experiencia'
import Educacion from './components/Educacion'
import './App.css'

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <CabeceraCV />
        <Perfil />
        <StackTecnologias />
        <Experiencia />
        <Educacion />
        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2025 - CV Dinámico creado con React + Vite</p>
          <p style={styles.footerSubtext}>
            Renderizado condicional y listas dinámicas 🚀
          </p>
        </footer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
    backgroundColor: '#e3f2fd'
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
    zIndex: -1
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
    zIndex: 1
  },
  footer: {
    textAlign: 'center',
    padding: '30px 20px',
    marginTop: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(100, 181, 246, 0.15)'
  },
  footerText: {
    color: '#1976d2',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
    fontSize: '1em'
  },
  footerSubtext: {
    color: '#64b5f6',
    margin: 0,
    fontSize: '0.9em'
  }
};

export default App;