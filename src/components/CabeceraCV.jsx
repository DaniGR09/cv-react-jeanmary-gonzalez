function CabeceraCV() {
  return (
    <header style={styles.header}>
      <div style={styles.avatarContainer}>
        <div style={styles.avatar}>
          <span style={styles.avatarText}>TN</span>
        </div>
      </div>
      <h1 style={styles.nombre}>Jeanmary Danielys Gonzalez Rojas</h1>
      <h2 style={styles.titulo}>Tecnologo en Analisis y Desarrollo de Software</h2>
      <div style={styles.contacto}>
        <div style={styles.contactoItem}>
          <span style={styles.icono}>📞</span>
          <span>+57 304 5712242</span>
        </div>
        <div style={styles.contactoItem}>
          <span style={styles.icono}>📧</span>
          <span>jeanmarydanielys3@gmail.com</span>
        </div>
        <div style={styles.contactoItem}>
          <span style={styles.icono}>📍</span>
          <span>La Estrella, Antioquia</span>
        </div>
      </div>
      <div style={styles.redes}>
        <a href="#" style={styles.redButton}>🔗 https://www.linkedin.com/in/jeanmary-danielys-gonz%C3%A1lez-b70604334/</a>
        <a href="#" style={styles.redButton}>💼 https://github.com/DaniGR09</a>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
    color: 'white',
    padding: '40px 30px',
    textAlign: 'center',
    borderRadius: '20px',
    marginBottom: '25px',
    boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
    position: 'relative',
    overflow: 'hidden'
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '5px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
  },
  avatarText: {
    fontSize: '3em',
    fontWeight: 'bold',
    color: '#1976d2'
  },
  nombre: {
    margin: '0 0 10px 0',
    fontSize: '2.8em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
  },
  titulo: {
    margin: '0 0 25px 0',
    fontSize: '1.6em',
    color: '#e3f2fd',
    fontWeight: '500'
  },
  contacto: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '20px',
    flexWrap: 'wrap',
    marginBottom: '25px'
  },
  contactoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px 20px',
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    fontSize: '0.95em'
  },
  icono: {
    fontSize: '1.2em'
  },
  redes: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  redButton: {
    backgroundColor: 'white',
    color: '#1976d2',
    padding: '12px 25px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer'
  }
};

export default CabeceraCV;