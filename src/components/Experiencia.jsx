function Experiencia() {
  const experiencias = [
    {
      id: 1,
      cargo: "Bartender / Auxiliar de Bar ",
      empresa: "Parrilla Isabella",
      año: "Diciembre 2022 - Enero 2023",
      descripcion: "Coordinación con el equipo de meseros para garantizar un servicio ágil y preparación y servicio eficiente de bebidas, gestionando múltiples pedidos bajo presión.",
      tipo: "trabajo"
    },
    {
      id: 2,
      cargo: "Backend para Aplicación Android",
      empresa: "Proyecto Personal",
      año: "2025",
      descripcion: "Se desarrolló una API REST completa para una aplicación Android funcional.",
      tipo: "proyecto"
    },
    {
      id: 3,
      cargo: "Sistema de Control de Asistencia",
      empresa: "Proyecto Académico SENA",
      año: "2025",
      descripcion: "Se desarrolló una aplicación de escritorio para el registro y control de asistencia.",
      tipo: "proyecto"
    }

  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>💼 Experiencia Profesional y Proyectos</h3>
      <div style={styles.grid}>
        {experiencias.map((exp) => (
          <div 
            key={exp.id} 
            style={{
              ...styles.card,
              borderLeft: exp.tipo === 'proyecto' 
                ? '4px solid #3498db' 
                : '4px solid #2ecc71'
            }}
          >
            <div style={styles.cardHeader}>
              <span style={{
                ...styles.badge,
                backgroundColor: exp.tipo === 'proyecto' ? '#e3f2fd' : '#e8f5e9',
                color: exp.tipo === 'proyecto' ? '#1976d2' : '#388e3c'
              }}>
                {exp.tipo === 'proyecto' ? '🚀 Proyecto' : '💼 Trabajo'}
              </span>
              <span style={styles.año}>{exp.año}</span>
            </div>
            <h4 style={styles.cargo}>{exp.cargo}</h4>
            <p style={styles.empresa}>{exp.empresa}</p>
            <p style={styles.descripcion}>{exp.descripcion}</p>
          </div>
        ))}
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
    marginBottom: '25px',
    textAlign: 'center',
    borderBottom: '3px solid #64b5f6',
    paddingBottom: '15px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px'
  },
  card: {
    backgroundColor: '#f8fbff',
    padding: '20px',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  badge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.85em',
    fontWeight: 'bold'
  },
  año: {
    color: '#90a4ae',
    fontSize: '0.9em',
    fontWeight: 'bold'
  },
  cargo: {
    color: '#1565c0',
    margin: '10px 0',
    fontSize: '1.2em',
    fontWeight: 'bold'
  },
  empresa: {
    color: '#42a5f5',
    margin: '8px 0',
    fontWeight: '600',
    fontSize: '0.95em'
  },
  descripcion: {
    color: '#546e7a',
    lineHeight: '1.6',
    fontSize: '0.9em'
  }
};

export default Experiencia;