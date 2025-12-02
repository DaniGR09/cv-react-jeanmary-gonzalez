function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header style={styles.header}>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <p>📞 {contacto.telefono} | 📧 {contacto.email} | 📍 {ciudad}</p>
      <p>🔗 <a href={contacto.linkedin}>LinkedIn</a> | 💼 <a href={contacto.github}>GitHub</a></p>
    </header>
  );
}

export default CabeceraCV;

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


