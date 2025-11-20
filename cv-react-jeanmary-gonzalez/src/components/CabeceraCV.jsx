function CabeceraCV() {
  return (
    <header style={styles.header}>
      <h1 style={styles.nombre}>JEANMARY DANIELYS GONZALEZ ROJAS</h1>
      <h2 style={styles.titulo}>TECNOLOGÍA EN ANALISIS Y DESARROLLO DE SOFTWARE</h2>
      <div style={styles.contacto}>
        <p>📞 +57 3045712242</p>
        <p>📧 jeanmarydanielys3@gmail.com</p>
        <p>📍 La estrella, Antioquia</p>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  nombre: {
    margin: '0',
    fontSize: '2.5em'
  },
  titulo: {
    margin: '10px 0',
    fontSize: '1.5em',
    color: '#3498db'
  },
  contacto: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '15px',
    flexWrap: 'wrap'
  }
};

export default CabeceraCV;