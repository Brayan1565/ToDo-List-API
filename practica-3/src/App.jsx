import "./App.css";
import { useState, useEffect } from "react";
import Encabezado from "./components/Encabezado/Encabezado";
import Buscador from "./components/Buscador/Buscador";
import Lista from "./components/Lista/Lista";
import Formulario from "./components/Formulario/Formulario";
import adaptar from "./components/adaptador/adaptador";


const API_URL = "https://jsonplaceholder.typicode.com/users"

function App() {
  const [equipo, setEquipo] = useState([]); 
  const [buscar, setBuscar] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) throw new Error("No se puede cargar la lista");
        const datos = await respuesta.json();

        setEquipo(adaptar(datos));
      } catch (e) {
        setError(e.message);
      } finally {
        setCargando(false);
      }
    };

    cargarUsuarios();
  
  }, []);

 
  const agregar = (nombre, tarea) => {
    
    const newEquipo = [...equipo];
    
    newEquipo.push({ nombre, tarea, id: Date.now(), completada: false });
    setEquipo(newEquipo);
  };

 
  const tareasFiltradas = equipo.filter(
    (x) =>
      x.tarea.toLowerCase().includes(buscar.toLowerCase()) ||
      x.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

 
  const alternar = (id) => {
    setEquipo(
      equipo.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t)),
    );
  };

  
  const eliminar = (id) => {
    setEquipo(equipo.filter((t) => t.id !== id));
  };

  
  const pendientes = equipo.filter((t) => !t.completada).length;

  return (
    <>
      <Encabezado total={equipo.length} pendientes={pendientes} />
      <Buscador onBuscar={setBuscar} />
      <Formulario onAgregar={agregar} />
      {cargando && <p>Cargando usuarios...</p>}
      {error && <p>Error: {error}</p>}
      {!cargando && !error && (
        <Lista lista={tareasFiltradas} 
        onAlternar={alternar} 
        onEliminar={eliminar} />
)}
    </>
  );
}

export default App;
