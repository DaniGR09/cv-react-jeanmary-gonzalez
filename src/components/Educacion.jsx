function Educacion() {
  const formacion = [
    {
      id: 1,
      tipo: "Tecnólogo",
      titulo: "Tecnólogo en Análisis y Desarrollo de Software",
      institucion: "SENA - Servicio Nacional de Aprendizaje",
      año: "2024 - 2025",
      estado: "En curso"
    },
    {
      id: 2,
      tipo: "Bachiller",
      titulo: "Bachiller Academico",
      institucion: "Ana Eva Escobar",
      año: "2023",
      estado: "Completado"
    },
    {
      id: 3,
      tipo: "Curso",
      titulo: "GIT",
      institucion: "W3Schools",
      año: "2025",
      estado: "Completado"
    },
    {
      id: 4,
      tipo: "Curso",
      titulo: "MondoDB",
      institucion: "W3Schools",
      año: "2025",
      estado: "Completado"
    },
    {
      id: 5,
      tipo: "Curso",
      titulo: "SQL",
      institucion: "W3Schools",
      año: "2025",
      estado: "Completado"
    }
  ];

  // Función para obtener color según el tipo
  const obtenerColor = (tipo) => {
    const colores = {
      "Tecnólogo": { bg: "#e3f2fd", border: "#1976d2", text: "#0d47a1" },
      "Curso": { bg: "#e8f5e9", border: "#43a047", text: "#2e7d32" },
      "Certificación": { bg: "#fff3e0", border: "#fb8c00", text: "#e65100" },
      "Taller": { bg: "#f3e5f5", border: "#8e24aa", text: "#6a1b9a" },
      "Seminario": { bg: "#fce4ec", border: "#ec407a", text: "#c2185b" }
    };
    return colores[tipo] || colores["Curso"];
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>🎓 Educación y Formación</h3>
      <div style={styles.timeline}>
        {formacion.map((item) => {
          const colores = obtenerColor(item.tipo);
          return (
            <div 
              key={item.id} 
              style={{
                ...styles.timelineItem,
                borderLeft: `4px solid ${colores.border}`
              }}
            >
              <div style={styles.itemHeader}>
                <span style={{
                  ...styles.tipoBadge,
                  backgroundColor: colores.bg,
                  color: colores.text
                }}>
                  {item.tipo}
                </span>
                <span style={{
                  ...styles.estadoBadge,
                  backgroundColor: item.estado === "En curso" ? "#bbdefb" : "#c8e6c9",
                  color: item.estado === "En curso" ? "#1565c0" : "#2e7d32"
                }}>
                  {item.estado === "En curso" ? "📚 En curso" : "✅ Completado"}
                </span>
              </div>
              <h4 style={styles.tituloFormacion}>{item.titulo}</h4>
              <p style={styles.institucion}>🏛️ {item.institucion}</p>
              <p style={styles.año}>📅 {item.año}</p>
            </div>
          );
        })}
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
    marginBottom: '30px',
    textAlign: 'center',
    borderBottom: '3px solid #64b5f6',
    paddingBottom: '15px'
  },
  timeline: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  },
  timelineItem: {
    backgroundColor: '#f8fbff',
    padding: '20px',
    borderRadius: '12px',
    paddingLeft: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tipoBadge: {
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.85em',
    fontWeight: 'bold'
  },
  estadoBadge: {
    padding: '4px 12px',
    borderRadius: '15px',
    fontSize: '0.8em',
    fontWeight: '600'
  },
  tituloFormacion: {
    color: '#1565c0',
    margin: '12px 0',
    fontSize: '1.1em',
    lineHeight: '1.4',
    fontWeight: 'bold'
  },
  institucion: {
    color: '#42a5f5',
    margin: '8px 0',
    fontWeight: '600',
    fontSize: '0.95em'
  },
  año: {
    color: '#90a4ae',
    margin: '8px 0',
    fontSize: '0.9em',
    fontWeight: '500'
  }
};

export default Educacion;