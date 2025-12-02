import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [nombre, setNombre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre.trim() === "") return;
    agregarTecnologia(nombre);
    setNombre("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nueva tecnología"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
