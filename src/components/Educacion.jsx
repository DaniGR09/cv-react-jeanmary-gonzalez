function Educacion() {
  const formacion = [
    {
      titulo: "Tecnólogo en Análisis y Desarrollo de Software",
      institucion: "SENA",
      año: "2023 - Actualidad"
    },
    {
      titulo: "Bachiller Academico",
      institucion: "Ana Eva Escobar",
      año: "2023"
    }
  ];

  return (
    <section style={styles.section}>
      <h3 style={styles.titulo}>Educación y Formación</h3>
      {formacion.map((item, index) => (
        <div key={index} style={styles.item}>
          <h4 style={styles.tituloFormacion}>{item.titulo}</h4>
          <p style={styles.institucion}>{item.institucion}</p>
          <p style={styles.año}>{item.año}</p>
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
    marginBottom: '15px',
    paddingBottom: '15px',
    borderLeft: '3px solid #3498db',
    paddingLeft: '15px'
  },
  tituloFormacion: {
    color: '#2c3e50',
    margin: '0 0 5px 0',
    fontSize: '1.1em'
  },
  institucion: {
    color: '#3498db',
    margin: '0 0 5px 0',
    fontWeight: 'bold'
  },
  año: {
    color: '#888',
    margin: '0',
    fontSize: '0.9em'
  }
};

export default Educacion;