function Perfil({ resumen }) {
  return (
    <section>
      <h3>👤 Perfil Profesional</h3>
      <p>{resumen}</p>
    </section>
  );
}

export default Perfil;


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


