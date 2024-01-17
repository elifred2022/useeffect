import { useState, useEffect } from "react";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contarEncendido, setContarEncendido] = useState(0);
  const [contarApagado, setContarApagado] = useState(0);

  useEffect(() => {
    console.log("total:" + contarEncendido);
  }, [contarEncendido]);

  useEffect(() => {
    console.log("total:" + contarApagado);
  }, [contarApagado]);

  const encenderApagar = () => {
    setStateCar((prevValue) => !prevValue);
    if (!stateCar) {
      setContarEncendido(contarEncendido + 1);
    } else {
      setContarApagado(contarApagado + 1);
    }
  };

  return (
    <div className="App">
      <h3>El carro esta: {stateCar ? "Encendido" : "Apagado"} </h3>
      <h4>Encendido: {contarEncendido} veces</h4>
      <h4>Apagado: {contarApagado} veces </h4>
      <button onClick={encenderApagar}>Encender / Apagar</button>
    </div>
  );
}

export default App;
