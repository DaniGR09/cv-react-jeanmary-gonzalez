
function Educacion({ formacion }) {
  return (
    <section>
      <h3>🎓 Educación</h3>
      {formacion.map(({id, tipo, titulo, institucion, año, estado}) => (
        <div key={id}>
          <h4>{titulo} ({tipo})</h4>
          <p>{institucion} - {año} - {estado}</p>
        </div>
      ))}
    </section>
  );
}

export default Educacion;

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
