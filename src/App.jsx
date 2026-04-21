import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const generarTarjeta = () => {
    if (nombre.trim() === "" || lenguaje.trim() === "") {
      return;
    }

    setMostrar(true);
    setNombre(nombre.trim());
    setLenguaje(lenguaje.trim());
  };

  const limpiarFormulario = () => {
    setNombre("");
    setLenguaje("");
    setMostrar(false);
  };

  const obtenerIniciales = (texto) => {
    return texto
      .trim()
      .split(" ")
      .filter((palabra) => palabra !== "")
      .map((palabra) => palabra[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };

  return (
    <div className="contenedor">
      <div className="panel">
        <h1>Generador de Tarjeta</h1>

        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tu lenguaje favorito"
          value={lenguaje}
          onChange={(e) => setLenguaje(e.target.value)}
        />

        <button
          onClick={generarTarjeta}
          disabled={nombre.trim() === "" || lenguaje.trim() === ""}
        >
          Generar tarjeta
        </button>

        {mostrar && (
          <div className="tarjeta">
            <div className="avatar">{obtenerIniciales(nombre)}</div>
            <h2>{nombre}</h2>
            <p>
              Lenguaje favorito: <strong>{lenguaje}</strong>
            </p>
          </div>
        )}

        <button className="btn-limpiar" onClick={limpiarFormulario}>
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default App;