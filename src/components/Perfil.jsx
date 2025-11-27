function Perfil() {
  const habilidadesTecnicas = [
    "Python", "SQL", "HTML5/CSS3", 
    "Git & GitHub", "C#", "MongoDB"
  ];

  const habilidadesBlandas = [
    "Trabajo en equipo", "Comunicación efectiva", 
    "Resolución de problemas", "Aprendizaje rápido",
    "Pensamiento crítico", "Adaptabilidad"
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>👤 Perfil Profesional</h3>
      
      <div style={styles.descripcionContainer}>
        <p style={styles.descripcion}>
          Soy estudiante del último trimestre de Tecnología en Análisis y Desarrollo de Software. Poseo conocimientos
sólidos en Python, bases de datos (SQL) y metodologías ágiles. Soy una persona responsable, comprometida y
con gran adaptabilidad. Busco una oportunidad de práctica para iniciar a partir del 16 de enero de 2026 donde
pueda fortalecer mis competencias y aportar a proyectos reales de desarrollo.
        </p>
        <p style={styles.descripcion}>
          Me destaco por mi capacidad de aprendizaje continuo, trabajo 
          colaborativo y compromiso con las mejores prácticas de desarrollo. 
          Siempre en búsqueda de nuevas tecnologías y metodologías que 
          mejoren la calidad del código y la experiencia del usuario.
        </p>
      </div>

      <div style={styles.habilidadesGrid}>
        <div style={styles.habilidadSeccion}>
          <h4 style={styles.subtitulo}>
            <span style={styles.iconoSubtitulo}>⚡</span>
            Habilidades Técnicas
          </h4>
          <div style={styles.habilidades}>
            {habilidadesTecnicas.map((habilidad, index) => (
              <span key={index} style={styles.badgeTecnica}>
                {habilidad}
              </span>
            ))}
          </div>
        </div>

        <div style={styles.habilidadSeccion}>
          <h4 style={styles.subtitulo}>
            <span style={styles.iconoSubtitulo}>🤝</span>
            Habilidades Blandas
          </h4>
          <div style={styles.habilidades}>
            {habilidadesBlandas.map((habilidad, index) => (
              <span key={index} style={styles.badgeBlanda}>
                {habilidad}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '15px',
    marginBottom: '25px',
    boxShadow: '0 4px 15px rgba(100, 181, 246, 0.15)'
  },
  titulo: {
    color: '#1976d2',
    fontSize: '2em',
    marginBottom: '20px',
    textAlign: 'center',
    borderBottom: '3px solid #64b5f6',
    paddingBottom: '15px'
  },
  descripcionContainer: {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '25px',
    borderLeft: '4px solid #42a5f5'
  },
  descripcion: {
    lineHeight: '1.8',
    color: '#37474f',
    marginBottom: '15px',
    fontSize: '1.05em',
    textAlign: 'justify'
  },
  habilidadesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  habilidadSeccion: {
    backgroundColor: '#f8fbff',
    padding: '20px',
    borderRadius: '12px',
    border: '2px solid #e3f2fd'
  },
  subtitulo: {
    color: '#1565c0',
    fontSize: '1.3em',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  iconoSubtitulo: {
    fontSize: '1.2em'
  },
  habilidades: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  badgeTecnica: {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '25px',
    fontSize: '0.9em',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)',
    transition: 'transform 0.2s ease'
  },
  badgeBlanda: {
    backgroundColor: '#42a5f5',
    color: 'white',
    padding: '10px 18px',
    borderRadius: '25px',
    fontSize: '0.9em',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(66, 165, 245, 0.3)',
    transition: 'transform 0.2s ease'
  }
};

export default Perfil;