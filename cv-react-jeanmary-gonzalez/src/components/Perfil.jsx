function Perfil() {
  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>Perfil Profesional</h3>
      <p style={styles.descripcion}>
Soy estudiante del último trimestre de Tecnología en Análisis y Desarrollo de Software. Poseo conocimientos
sólidos en Python, bases de datos (SQL) y metodologías ágiles. Soy una persona responsable, comprometida y
con gran adaptabilidad. Busco una oportunidad de práctica para iniciar a partir del 16 de enero de 2026 donde
pueda fortalecer mis competencias y aportar a proyectos reales de desarrollo.
      </p>
      <div style={styles.habilidades}>
        <span style={styles.badge}>Python</span>
        <span style={styles.badge}>SQL</span>
        <span style={styles.badge}>HTML/CSS</span>
        <span style={styles.badge}>Git</span>
        <span style={styles.badge}>Trabajo en equipo</span>
        <span style={styles.badge}>Comunicación efectiva</span>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  titulo: {
    color: '#2c3e50',
    borderBottom: '3px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '15px'
  },
  descripcion: {
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px'
  },
  habilidades: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  badge: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '20px',
    fontSize: '0.9em'
  }
};

export default Perfil;