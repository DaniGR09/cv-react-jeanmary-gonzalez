function Experiencia() {
  const experiencias = [
    {
      id: 1,
      cargo: "Desarrollador Front-End React",
      empresa: "TechCorp Solutions",
      año: "2024 - Presente",
      descripcion: "Desarrollo de aplicaciones web con React y TypeScript. Implementación de interfaces responsivas y optimización de rendimiento.",
      tipo: "trabajo"
    },
    {
      id: 2,
      cargo: "Practicante de Desarrollo Web",
      empresa: "Digital Innovations S.A.S",
      año: "2023 - 2024",
      descripcion: "Apoyo en el desarrollo de componentes reutilizables con React. Participación en reuniones de planificación ágil.",
      tipo: "trabajo"
    },
    {
      id: 3,
      cargo: "Proyecto: E-Commerce con React",
      empresa: "Proyecto Personal",
      año: "2024",
      descripcion: "Desarrollo completo de tienda en línea con carrito de compras, integración con API REST y pasarela de pagos simulada.",
      tipo: "proyecto"
    },
    {
      id: 4,
      cargo: "Proyecto: Dashboard Administrativo",
      empresa: "Proyecto Académico SENA",
      año: "2023",
      descripcion: "Sistema de gestión con gráficas en tiempo real usando React y Chart.js. Autenticación con JWT.",
      tipo: "proyecto"
    },
    {
      id: 5,
      cargo: "Freelance - Landing Pages",
      empresa: "Clientes Independientes",
      año: "2023",
      descripcion: "Diseño y desarrollo de páginas de aterrizaje para pequeñas empresas. Optimización SEO y velocidad de carga.",
      tipo: "trabajo"
    },
    {
      id: 6,
      cargo: "Proyecto: App de Tareas con React",
      empresa: "Proyecto Personal",
      año: "2023",
      descripcion: "Aplicación de gestión de tareas con funcionalidades CRUD, filtros dinámicos y almacenamiento local.",
      tipo: "proyecto"
    },
    {
      id: 7,
      cargo: "Líder Técnico - Hackathon",
      empresa: "SENA Hackathon 2024",
      año: "2024",
      descripcion: "Liderazgo de equipo de 4 personas en competencia de desarrollo. Creación de prototipo funcional en 48 horas.",
      tipo: "trabajo"
    },
    {
      id: 8,
      cargo: "Proyecto: Clone de Netflix",
      empresa: "Proyecto de Aprendizaje",
      año: "2023",
      descripcion: "Réplica de interfaz de Netflix consumiendo API de películas. Implementación de búsqueda y categorías dinámicas.",
      tipo: "proyecto"
    },
    {
      id: 9,
      cargo: "Asistente de Soporte TI",
      empresa: "CompuServicios Ltda",
      año: "2022 - 2023",
      descripcion: "Soporte técnico a usuarios finales, mantenimiento de equipos y resolución de incidencias de software.",
      tipo: "trabajo"
    },
    {
      id: 10,
      cargo: "Proyecto: Portfolio Personal Interactivo",
      empresa: "Proyecto Personal",
      año: "2024",
      descripcion: "Portafolio web con animaciones, modo oscuro/claro y sección de proyectos con filtros interactivos.",
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