import { useState } from "react";

function ToggleHabilidades({ habilidades }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <section>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>
      {mostrar && (
        <ul>
          {habilidades.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
    </section>
  );
}

export default ToggleHabilidades;
