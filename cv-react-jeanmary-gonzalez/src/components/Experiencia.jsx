function Experiencia() {
  const experiencias = [
    {
      cargo: "Bartender / Auxiliar de Bar",
      empresa: "Parilla Isabella",
      año: "2022",
      descripcion: "Coordinación con el equipo de meseros para garantizar un servicio ágil y preparación y servicio eficiente de bebidas, gestionando múltiples pedidos bajo presión"
    }
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>Experiencia</h3>
      {experiencias.map((exp, index) => (
        <div key={index} style={styles.item}>
          <h4 style={styles.cargo}>{exp.cargo}</h4>
          <p style={styles.empresa}>{exp.empresa} | {exp.año}</p>
          <p style={styles.descripcion}>{exp.descripcion}</p>
        </div>
      ))}
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
    marginBottom: '20px'
  },
  item: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  cargo: {
    color: '#2c3e50',
    margin: '0 0 5px 0'
  },
  empresa: {
    color: '#3498db',
    margin: '0 0 10px 0',
    fontWeight: 'bold'
  },
  descripcion: {
    color: '#555',
    lineHeight: '1.5'
  }
};

export default Experiencia;