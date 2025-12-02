function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>💼 Experiencia</h3>
      {experiencias.map(({id, cargo, empresa, año, descripcion, tipo}) => (
        <div key={id}>
          <h4>{cargo} - {empresa}</h4>
          <p>{año}</p>
          <p>{descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;

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
