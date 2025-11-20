function StackTecnologias() {
  const tecnologias = [
    { id: 1, nombre: "JavaScript", nivel: "Avanzado", color: "#f0db4f" },
    { id: 2, nombre: "React", nivel: "Avanzado", color: "#61dafb" },
    { id: 3, nombre: "HTML5", nivel: "Avanzado", color: "#e34c26" },
    { id: 4, nombre: "CSS3", nivel: "Avanzado", color: "#264de4" },
    { id: 5, nombre: "Node.js", nivel: "Intermedio", color: "#68a063" },
    { id: 6, nombre: "Git", nivel: "Avanzado", color: "#f34f29" },
    { id: 7, nombre: "GitHub", nivel: "Avanzado", color: "#181717" },
    { id: 8, nombre: "TypeScript", nivel: "Intermedio", color: "#3178c6" },
    { id: 9, nombre: "Tailwind CSS", nivel: "Intermedio", color: "#06b6d4" },
    { id: 10, nombre: "MongoDB", nivel: "Básico", color: "#4db33d" },
    { id: 11, nombre: "Express.js", nivel: "Intermedio", color: "#000000" },
    { id: 12, nombre: "MySQL", nivel: "Intermedio", color: "#00758f" },
    { id: 13, nombre: "Figma", nivel: "Intermedio", color: "#a259ff" },
    { id: 14, nombre: "Vite", nivel: "Avanzado", color: "#646cff" },
    { id: 15, nombre: "Redux", nivel: "Básico", color: "#764abc" }
  ];

  // Función para obtener estilo según el nivel
  const obtenerEstiloNivel = (nivel) => {
    switch (nivel) {
      case "Avanzado":
        return {
          backgroundColor: "#e3f2fd",
          borderColor: "#1976d2",
          emoji: "⭐⭐⭐"
        };
      case "Intermedio":
        return {
          backgroundColor: "#e8f5e9",
          borderColor: "#43a047",
          emoji: "⭐⭐"
        };
      case "Básico":
        return {
          backgroundColor: "#fff3e0",
          borderColor: "#fb8c00",
          emoji: "⭐"
        };
      default:
        return {
          backgroundColor: "#f5f5f5",
          borderColor: "#9e9e9e",
          emoji: "📚"
        };
    }
  };

  // Filtrar tecnologías por nivel
  const avanzadas = tecnologias.filter(t => t.nivel === "Avanzado");
  const intermedias = tecnologias.filter(t => t.nivel === "Intermedio");
  const basicas = tecnologias.filter(t => t.nivel === "Básico");

  // Renderizar sección de tecnologías
  const renderizarSeccion = (titulo, techs, icono) => {
    if (techs.length === 0) return null;

    return (
      <div style={styles.seccion}>
        <h4 style={styles.subtitulo}>
          {icono} {titulo} ({techs.length})
        </h4>
        <div style={styles.techGrid}>
          {techs.map((tech) => {
            const estilo = obtenerEstiloNivel(tech.nivel);
            return (
              <div
                key={tech.id}
                style={{
                  ...styles.techCard,
                  backgroundColor: estilo.backgroundColor,
                  borderLeft: `4px solid ${estilo.borderColor}`
                }}
              >
                <div style={styles.techHeader}>
                  <span 
                    style={{
                      ...styles.colorBadge,
                      backgroundColor: tech.color
                    }}
                  ></span>
                  <span style={styles.nombreTech}>{tech.nombre}</span>
                </div>
                <div style={styles.techFooter}>
                  <span style={styles.estrellas}>{estilo.emoji}</span>
                  <span style={styles.nivelTexto}>{tech.nivel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>💻 Stack de Tecnologías</h3>
      
      <div style={styles.resumen}>
        <div style={styles.resumenItem}>
          <span style={styles.numeroGrande}>{tecnologias.length}</span>
          <span style={styles.textoResumen}>Tecnologías</span>
        </div>
        <div style={styles.resumenItem}>
          <span style={styles.numeroGrande}>{avanzadas.length}</span>
          <span style={styles.textoResumen}>Nivel Avanzado</span>
        </div>
        <div style={styles.resumenItem}>
          <span style={styles.numeroGrande}>{intermedias.length}</span>
          <span style={styles.textoResumen}>Nivel Intermedio</span>
        </div>
        <div style={styles.resumenItem}>
          <span style={styles.numeroGrande}>{basicas.length}</span>
          <span style={styles.textoResumen}>Nivel Básico</span>
        </div>
      </div>

      {renderizarSeccion("Nivel Avanzado", avanzadas, "🚀")}
      {renderizarSeccion("Nivel Intermedio", intermedias, "📈")}
      {renderizarSeccion("Nivel Básico", basicas, "🌱")}

      {tecnologias.length === 0 && (
        <p style={styles.mensajeVacio}>
          No hay tecnologías registradas aún.
        </p>
      )}
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
  resumen: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '15px',
    marginBottom: '30px'
  },
  resumenItem: {
    backgroundColor: '#e3f2fd',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    border: '2px solid #64b5f6'
  },
  numeroGrande: {
    display: 'block',
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: '5px'
  },
  textoResumen: {
    display: 'block',
    color: '#546e7a',
    fontSize: '0.9em',
    fontWeight: '600'
  },
  seccion: {
    marginBottom: '30px'
  },
  subtitulo: {
    color: '#1565c0',
    fontSize: '1.4em',
    marginBottom: '15px',
    paddingLeft: '10px',
    borderLeft: '4px solid #42a5f5'
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px'
  },
  techCard: {
    padding: '15px',
    borderRadius: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  techHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px'
  },
  colorBadge: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '2px solid white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  },
  nombreTech: {
    color: '#1565c0',
    fontWeight: 'bold',
    fontSize: '1em'
  },
  techFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8px'
  },
  estrellas: {
    fontSize: '0.9em'
  },
  nivelTexto: {
    fontSize: '0.85em',
    color: '#546e7a',
    fontWeight: '600'
  },
  mensajeVacio: {
    textAlign: 'center',
    color: '#90a4ae',
    fontSize: '1.1em',
    padding: '40px',
    fontStyle: 'italic'
  }
};

export default StackTecnologias;